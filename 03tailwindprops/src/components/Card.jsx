import React from 'react'

function card(props) { // we have create two cards so usme abb differnce laane ke liye ki kaise konsa differ hoga to props use
  console.log("props",props);
  // props kaise use karega properties card ki
  console.log(props.username); // yaha pe defualt value daal sakte
  return (
    <div class="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left">
      <h1 class="text-lg font-semibold text-white">{props.username}</h1>
      <p class="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        View Profile →
      </button>
    </div>
  </div>
  
  )
}

export default card