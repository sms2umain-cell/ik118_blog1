'use client';

import Link from 'next/link';

export default function BlogPost() {
  const themeCategories = [
    {
      name: '古埃及主题',
      description: '探索法老的宝藏和神秘金字塔',
      games: ['Book of Dead', 'Cleopatra', 'Legacy of Egypt', 'Eye of Horus'],
      features: ['免费旋转', '扩展符号', '乘数奖励', '累进奖池'],
      popularity: '95%'
    },
    {
      name: '神话传说',
      description: '体验希腊、北欧和亚洲神话的魅力',
      games: ['Age of the Gods', 'Vikings Go Berzerk', 'Divine Fortune', 'Thunderstruck II'],
      features: ['多级奖池', '神秘符号', '级联获胜', '奖金购买'],
      popularity: '92%'
    },
    {
      name: '冒险探索',
      description: '踏上寻宝和探险的刺激旅程',
      games: ['Gonzo\'s Quest', 'Rich Wilde Series', 'Tomb Raider', 'Jungle Jim'],
      features: ['雪崩机制', '乘数增长', '免费旋转', '特殊符号'],
      popularity: '90%'
    },
    {
      name: '水果经典',
      description: '经典水果机的现代演绎',
      games: ['Starburst', 'Fruit Shop', 'Jammin\' Jars', 'Sweet Bonanza'],
      features: ['双向支付', '集群支付', '级联获胜', '乘数符号'],
      popularity: '88%'
    },
    {
      name: '东方主题',
      description: '感受亚洲文化的神秘魅力',
      games: ['88 Fortunes', 'Dragon\'s Luck', 'Koi Princess', 'Sakura Fortune'],
      features: ['幸运符号', '免费游戏', '随机百搭', '奖金轮盘'],
      popularity: '87%'
    },
    {
      name: '电影电视',
      description: '体验热门影视作品的精彩',
      games: ['Game of Thrones', 'Jurassic Park', 'The Walking Dead', 'Narcos'],
      features: ['多种奖金', '电影片段', '角色特性', '累进奖池'],
      popularity: '85%'
    }
  ];

  const topThemedSlots = [
    {
      name: 'Book of Dead',
      theme: '古埃及',
      provider: 'Play\'n GO',
      rtp: '96.21%',
      volatility: '高',
      maxWin: '5,000x',
      features: ['扩展符号', '免费旋转', '赌博功能']
    },
    {
      name: 'Gonzo\'s Quest',
      theme: '冒险探索',
      provider: 'NetEnt',
      rtp: '95.97%',
      volatility: '中',
      maxWin: '2,500x',
      features: ['雪崩机制', '乘数增长', '免费落体']
    },
    {
      name: 'Starburst',
      theme: '太空宝石',
      provider: 'NetEnt',
      rtp: '96.09%',
      volatility: '低',
      maxWin: '500x',
      features: ['双向支付', '扩展百搭', '重新旋转']
    },
    {
      name: 'Age of the Gods',
      theme: '希腊神话',
      provider: 'Playtech',
      rtp: '95.02%',
      volatility: '中高',
      maxWin: '累进奖池',
      features: ['4级奖池', '免费游戏', '乘数奖励']
    },
    {
      name: '88 Fortunes',
      theme: '中国文化',
      provider: 'SG Digital',
      rtp: '96.00%',
      volatility: '中',
      maxWin: '1,000x',
      features: ['全盘符号', '免费游戏', '幸运奖励']
    }
  ];

  const selectionTips = [
    {
      title: '了解主题偏好',
      description: '选择您真正感兴趣的主题，这会让游戏体验更加愉快',
      icon: 'ri-heart-line'
    },
    {
      title: '检查游戏特性',
      description: '确保主题游戏具有吸引人的奖金功能和机制',
      icon: 'ri-star-line'
    },
    {
      title: '考虑 RTP 和波动性',
      description: '不要只看主题，还要关注游戏的数学模型',
      icon: 'ri-line-chart-line'
    },
    {
      title: '试玩模式体验',
      description: '在投入真钱之前，先用免费模式测试游戏',
      icon: 'ri-play-circle-line'
    },
    {
      title: '阅读玩家评价',
      description: '查看其他玩家对主题游戏的真实反馈',
      icon: 'ri-chat-3-line'
    },
    {
      title: '关注新发布',
      description: '新主题游戏通常具有更先进的图形和功能',
      icon: 'ri-rocket-line'
    }
  ];

  const relatedArticles = [
    {
      title: 'Slot Providers Comparison 2025',
      slug: '/slot-games/slot-providers-comparison',
      category: 'Providers',
      readTime: '10 min'
    },
    {
      title: 'High RTP Slots Guide',
      slug: '/slot-games/high-rtp-slots-2025',
      category: 'Strategy',
      readTime: '8 min'
    },
    {
      title: 'Slot Bonus Features Explained',
      slug: '/slot-games/slot-bonus-features-explained',
      category: 'Features',
      readTime: '12 min'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            href="/slot-games"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Slot Games
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Themed Slots
            </span>
            <span className="text-gray-500 text-sm">15 min read</span>
            <span className="text-gray-500 text-sm">Updated: January 2025</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Themed Slots Collection: Complete Guide to Popular Slot Themes
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore the most popular slot themes at IK118. From ancient Egypt to modern movies, discover themed slots that match your interests and playing style.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-12 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-lightbulb-line text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">IK118 Expert Insight</h3>
              <p className="text-purple-100 leading-relaxed">
                Themed slots combine entertainment with winning potential. Choose themes you enjoy, but always check the RTP and volatility. The best themed slots offer both engaging storylines and solid mathematical models for fair gameplay.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Slot Theme Categories</h2>
            
            <div className="space-y-6">
              {themeCategories.map((category, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-6 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {category.popularity} 玩家喜爱
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-gray-700 mb-2">热门游戏：</p>
                    <div className="flex flex-wrap gap-2">
                      {category.games.map((game, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                          {game}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">常见特性：</p>
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Themed Slots at IK118</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">游戏名称</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">主题</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">供应商</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">RTP</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">波动性</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">最大赢额</th>
                  </tr>
                </thead>
                <tbody>
                  {topThemedSlots.map((slot, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-purple-50">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-semibold text-gray-900">{slot.name}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {slot.features.map((feature, idx) => (
                              <span key={idx} className="text-xs text-purple-600">
                                {feature}{idx < slot.features.length - 1 ? ' • ' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{slot.theme}</td>
                      <td className="py-4 px-4 text-gray-600">{slot.provider}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">
                          {slot.rtp}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded text-sm font-medium ${
                          slot.volatility === '高' ? 'bg-red-100 text-red-700' :
                          slot.volatility === '中高' ? 'bg-orange-100 text-orange-700' :
                          slot.volatility === '中' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {slot.volatility}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-semibold text-purple-600">{slot.maxWin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Right Themed Slot</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {selectionTips.map((tip, index) => (
                <div key={index} className="flex gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${tip.icon} text-2xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Theme-Specific Strategies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">古埃及主题策略</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                    <span>关注扩展符号功能，这是古埃及主题的核心机制</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                    <span>免费旋转期间通常有更高的赢率，要有耐心等待触发</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                    <span>许多古埃及游戏提供赌博功能，谨慎使用以保护利润</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">神话传说策略</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                    <span>神话主题通常有多个奖金功能，了解每个功能的触发条件</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                    <span>累进奖池游戏需要更大的资金，合理分配预算</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                    <span>注意不同神祇符号的价值差异，高价值符号更重要</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">冒险探索策略</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                    <span>雪崩/级联机制可以产生连续获胜，寻找这类功能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                    <span>乘数增长是关键，免费旋转期间乘数通常不会重置</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                    <span>冒险主题通常有中等波动性，适合平衡型玩家</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-6">IK118 Themed Slots Advantages</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <i className="ri-check-double-line text-2xl mt-1"></i>
                <div>
                  <h3 className="font-bold mb-2">丰富的主题选择</h3>
                  <p className="text-purple-100 text-sm">超过 50 种不同主题，满足各种玩家偏好</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-double-line text-2xl mt-1"></i>
                <div>
                  <h3 className="font-bold mb-2">顶级游戏供应商</h3>
                  <p className="text-purple-100 text-sm">与 NetEnt、Pragmatic Play 等知名供应商合作</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-double-line text-2xl mt-1"></i>
                <div>
                  <h3 className="font-bold mb-2">免费试玩模式</h3>
                  <p className="text-purple-100 text-sm">所有主题游戏都提供免费试玩，无风险体验</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-double-line text-2xl mt-1"></i>
                <div>
                  <h3 className="font-bold mb-2">定期更新</h3>
                  <p className="text-purple-100 text-sm">每月新增最新主题游戏，保持新鲜感</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Responsible Gaming with Themed Slots</h2>
            
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                虽然主题老虎机提供了娱乐性和沉浸感，但重要的是要保持负责任的游戏态度：
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <div className="flex gap-3">
                  <i className="ri-alert-line text-yellow-600 text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">重要提醒</p>
                    <ul className="space-y-1 text-sm">
                      <li>• 不要因为喜欢主题而忽视游戏的数学模型</li>
                      <li>• 设定时间和金钱限制，即使游戏很有趣</li>
                      <li>• 主题只是娱乐元素，不会影响获胜概率</li>
                      <li>• 如果游戏不再有趣，立即停止</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              主题老虎机为玩家提供了丰富多样的娱乐选择。从古埃及的神秘到北欧神话的壮丽，从冒险探索到经典水果机，每种主题都有其独特的魅力和游戏特性。
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              在 IK118，我们提供最全面的主题老虎机收藏，确保每位玩家都能找到符合自己兴趣的游戏。记住，选择主题游戏时，不仅要考虑视觉和故事吸引力，还要关注 RTP、波动性和奖金功能。
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              无论您选择哪种主题，都要保持负责任的游戏态度，将娱乐放在首位。祝您在 IK118 的主题老虎机之旅中玩得开心！
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Link
                key={index}
                href={article.slug}
                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <span className="text-sm text-purple-600 font-medium">{article.category}</span>
                <h4 className="font-bold text-gray-900 mt-2 mb-3">{article.title}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <i className="ri-time-line mr-1"></i>
                  {article.readTime}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
