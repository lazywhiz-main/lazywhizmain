'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PomodoroTimer() {
  const router = useRouter();
  const [mode, setMode] = useState<'work' | 'break' | 'idle'>('idle');
  const [seconds, setSeconds] = useState(1500); // 25分 = 1500秒
  const [isRunning, setIsRunning] = useState(false);
  const [workDuration, setWorkDuration] = useState(25); // デフォルト25分
  const [breakDuration, setBreakDuration] = useState(5); // デフォルト5分
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  // タイマー終了時の効果音
  useEffect(() => {
    audioRef.current = new Audio('/sounds/notification.mp3');
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // タイマーのメインロジック
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds <= 1) {
            clearInterval(intervalRef.current);
            playSound();
            
            if (mode === 'work') {
              setSessionsCompleted(prev => prev + 1);
              setMode('break');
              return breakDuration * 60;
            } else if (mode === 'break') {
              setMode('work');
              return workDuration * 60;
            }
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, mode, workDuration, breakDuration]);

  // 通知音を再生
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('通知音の再生に失敗:', e));
      
      // ブラウザ通知も表示
      if (Notification.permission === 'granted') {
        new Notification(mode === 'work' ? 'お疲れ様でした！休憩時間です' : '休憩終了！作業を再開しましょう');
      }
    }
  };

  // タイマーのスタート
  const startTimer = (timerMode: 'work' | 'break') => {
    // 通知許可の取得を試行
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
    
    setMode(timerMode);
    setSeconds(timerMode === 'work' ? workDuration * 60 : breakDuration * 60);
    setIsRunning(true);
  };

  // タイマーの一時停止/再開
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // タイマーのリセット
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setMode('idle');
  };

  // フォーマット
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <Link href="/toolkit" className="flex items-center text-brand-500 hover:text-brand-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span>ツールキットに戻る</span>
            </Link>
            <h1 className="text-xl font-bold">LazyPomodoro</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* タイマーカード */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* タイマー表示 */}
            <div className={`py-16 px-8 text-center ${
              mode === 'work' ? 'bg-brand-200' : 
              mode === 'break' ? 'bg-[#F5ADA8]' : 
              'bg-neutral-100'
            }`}>
              <h2 className="text-2xl font-bold mb-2">
                {mode === 'work' ? '集中タイム' : 
                 mode === 'break' ? '休憩タイム' : 
                 'ポモドーロタイマー'}
              </h2>
              <div className="text-6xl font-mono font-bold mb-4">
                {formatTime(seconds)}
              </div>
              <p className="text-text-medium mb-2">
                {mode === 'idle' ? 
                  'タイマーを開始してください' : 
                  `${sessionsCompleted}セッション完了`
                }
              </p>
            </div>

            {/* コントロール */}
            <div className="p-6">
              {mode === 'idle' ? (
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => startTimer('work')} 
                    className="py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-all shadow-sm hover:shadow"
                  >
                    作業開始
                  </button>
                  <button 
                    onClick={() => startTimer('break')} 
                    className="py-3 bg-[#E2857B] hover:bg-[#D67B71] text-white rounded-lg transition-all shadow-sm hover:shadow"
                  >
                    休憩開始
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={toggleTimer} 
                    className={`py-3 ${isRunning ? 'bg-neutral-500' : 'bg-brand-500'} hover:opacity-90 text-white rounded-lg transition-all shadow-sm hover:shadow`}
                  >
                    {isRunning ? '一時停止' : '再開'}
                  </button>
                  <button 
                    onClick={resetTimer} 
                    className="py-3 bg-neutral-200 hover:bg-neutral-300 text-text-high rounded-lg transition-all"
                  >
                    リセット
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 設定パネル */}
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center cursor-pointer"
                 onClick={() => setShowSettings(!showSettings)}>
              <h3 className="font-bold">設定</h3>
              <svg className={`w-5 h-5 transform transition-transform ${showSettings ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            
            {showSettings && (
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-medium mb-1">
                      作業時間（分）
                    </label>
                    <input 
                      type="number" 
                      min="1" 
                      max="60" 
                      value={workDuration} 
                      onChange={(e) => setWorkDuration(parseInt(e.target.value) || 25)}
                      className="w-full p-2 border border-neutral-200 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-medium mb-1">
                      休憩時間（分）
                    </label>
                    <input 
                      type="number" 
                      min="1" 
                      max="30" 
                      value={breakDuration} 
                      onChange={(e) => setBreakDuration(parseInt(e.target.value) || 5)}
                      className="w-full p-2 border border-neutral-200 rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* LazyTip */}
          <div className="mt-8 bg-brand-50 rounded-xl p-6 border border-brand-200">
            <h3 className="font-bold flex items-center text-brand-600 mb-2">
              <span className="mr-2">💡</span> LazyTip
            </h3>
            <p className="text-sm text-text-medium">
              ポモドーロテクニックは「賢く怠ける」効率化の王道。25分の集中 + 5分の完全休憩のサイクルで、脳に定期的な休息を与えながら成果を出せます。LazyPomodoro は通知機能付きなので、時間を気にせず集中できます。
            </p>
          </div>

          {/* サービスリンク */}
          <div className="mt-12 text-center">
            <p className="text-text-medium mb-4">もっと効率的な働き方を探していますか？</p>
            <Link 
              href="/service/spark" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#F5ADA8] hover:bg-[#E2857B] text-white rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              <span>Soft-Sparkで相談する</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 