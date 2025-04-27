import React from 'react';
import './App.css'
import Profile from './components/Profile/Profile'
import friends from './friends.json';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/Transaction';
import transactions from './transactions.json';
function App() {
  const userData = {
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308
    }
  };

  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
      location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App
