// self.addEventListener('activate', event => {
//     console.log('V1 now ready to handle fetches!');
// });

self.addEventListener("fetch", function(event) {
    console.log("fetch method is gone");
 });

self.addEventListener("push", function(event) {
    event.waitUntil(
      self.registration.pushManager.getSubscription()
        .then(function(subscription) {
          if (subscription) {
            return subscription.endpoint
          }
          throw new Error('User not subscribed')
      })
      .then(function(res) {
        return self.registration.showNotification('EmotionCompetition', {
          icon: 'static/img/icons/android-chrome-192x192.png',
          body: '本日のハイスコアが更新されました！'
        })
      })
    )
})

self.addEventListener("notificationclick", function(event) {
  event.notification.close()
  clients.openWindow("/cameraApp_pwa/#/")
}, false)

// self.addEventListener('notificationclick', function (event) {
//     event.notification.close();
// }, false);