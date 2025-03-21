import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, {user?.firstName || 'User'}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            We're glad to have you here. Here's your personal dashboard.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Your Account</h2>
            <div className="space-y-3">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {user?.emailAddresses[0].emailAddress}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Member since:</span>{' '}
                {new Date(user?.createdAt || '').toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <p className="text-gray-600">Last login: {new Date(user?.lastSignInAt || '').toLocaleString()}</p>
              <p className="text-gray-600">Account status: Active</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Edit Profile
              </button>
              <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition">
                View Settings
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="space-y-3">
              <p className="text-gray-600">No new notifications</p>
              <a href="#" className="text-blue-600 hover:underline">
                View all notifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
