import notifications from "../data/notifications";
import NotificationCard from "../components/notifications/NotificationCard";

function Notifications() {
  return (
    <div className="max-w-3xl mx-auto">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Notifications
        </h1>

        <p className="text-slate-400 mt-2">
          Stay updated with your activity
        </p>

      </div>

      <div className="space-y-4">

        {notifications.map(
          (notification) => (
            <NotificationCard
              key={notification.id}
              user={notification.user}
              action={
                notification.action
              }
              time={notification.time}
              unread={
                notification.unread
              }
            />
          )
        )}

      </div>

    </div>
  );
}

export default Notifications;