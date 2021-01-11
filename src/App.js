import React from 'react';

import Profile from './components/Profile/Profile';
import user from './JSON/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './JSON/statistical-data';

import FriendList from './components/FriendList/FriendList';
import friendsData from './JSON/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactionHistoryData from './JSON/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="File upload" stats={statisticalData} />
    <FriendList friends={friendsData} />
    <TransactionHistory transactions={transactionHistoryData} />
  </>
);
export default App;