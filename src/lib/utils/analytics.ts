export interface AnalyticsEvent {
  event: string;
  category: 'onboarding' | 'generation' | 'analysis' | 'improvement';
  data?: Record<string, any>;
  timestamp: Date;
}

class SimpleAnalytics {
  private events: AnalyticsEvent[] = [];

  track(event: string, category: AnalyticsEvent['category'], data?: Record<string, any>): void {
    this.events.push({
      event,
      category,
      data,
      timestamp: new Date()
    });
    
    console.log('📊 Analytics:', { event, category, data });
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  getEventsByCategory(category: AnalyticsEvent['category']): AnalyticsEvent[] {
    return this.events.filter(e => e.category === category);
  }

  clear(): void {
    this.events = [];
  }
}

export const analytics = new SimpleAnalytics();
