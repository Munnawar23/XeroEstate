import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// Request notification permissions
export async function requestNotificationPermissions() {
  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.log('Notification permissions not granted');
      return false;
    }

    // For Android, create notification channel
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('daily-reminders', {
        name: 'Daily Reminders',
        importance: Notifications.AndroidImportance.HIGH,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#3B82F6',
      });
    }

    return true;
  } catch (error) {
    console.error('Error requesting notification permissions:', error);
    return false;
  }
}

// Schedule morning notification (11 AM)
export async function scheduleMorningNotification() {
  try {
    // Calculate seconds until 11 AM
    const now = new Date();
    const scheduledTime = new Date();
    scheduledTime.setHours(11, 0, 0, 0);
    
    // If 11 AM has passed today, schedule for tomorrow
    if (scheduledTime <= now) {
      scheduledTime.setDate(scheduledTime.getDate() + 1);
    }
    
    const secondsUntilTrigger = Math.floor((scheduledTime.getTime() - now.getTime()) / 1000);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: '🏡 Good Morning!',
        body: 'Hey! Check out new houses available today',
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: { screen: 'home' },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: secondsUntilTrigger,
        repeats: true,
      },
    });

    console.log('Morning notification scheduled for 11 AM');
  } catch (error) {
    console.error('Error scheduling morning notification:', error);
  }
}

// Schedule evening notification (9 PM)
export async function scheduleEveningNotification() {
  try {
    // Calculate seconds until 9 PM
    const now = new Date();
    const scheduledTime = new Date();
    scheduledTime.setHours(21, 0, 0, 0);
    
    // If 9 PM has passed today, schedule for tomorrow
    if (scheduledTime <= now) {
      scheduledTime.setDate(scheduledTime.getDate() + 1);
    }
    
    const secondsUntilTrigger = Math.floor((scheduledTime.getTime() - now.getTime()) / 1000);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: '🌙 Good Evening!',
        body: "Hey! How's your day? Check houses to buy",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: { screen: 'home' },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: secondsUntilTrigger,
        repeats: true,
      },
    });

    console.log('Evening notification scheduled for 9 PM');
  } catch (error) {
    console.error('Error scheduling evening notification:', error);
  }
}

// Schedule all daily notifications
export async function scheduleDailyNotifications() {
  try {
    // Request permissions first
    const hasPermission = await requestNotificationPermissions();
    
    if (!hasPermission) {
      console.log('Cannot schedule notifications without permission');
      return false;
    }

    // Cancel any existing notifications
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Schedule new notifications
    await scheduleMorningNotification();
    await scheduleEveningNotification();

    console.log('Daily notifications scheduled successfully');
    return true;
  } catch (error) {
    console.error('Error scheduling daily notifications:', error);
    return false;
  }
}

// Cancel all notifications
export async function cancelAllNotifications() {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    console.log('All notifications cancelled');
  } catch (error) {
    console.error('Error cancelling notifications:', error);
  }
}



