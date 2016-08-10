var meetings = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

function mergeMeetingTimes(arr) {

  var sortedMeetings = arr.sort(function(objA, objB) {
    return objA.startTime - objB.startTime
  });

  //initialize with the earliest meeting object
  var mergedMeetings = [sortedMeetings[0]];


  for (var i = 1; i < sortedMeetings.length; i++) {

      var currentMeeting = sortedMeetings[i];

      var lastMergedMeeting = mergedMeetings[mergedMeetings.length -1];

      if ( lastMergedMeeting.endTime >= currentMeeting.startTime ) {
          lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);

      } else {
          mergedMeetings.push(currentMeeting);
      }
  }

  return  mergedMeetings;
}


console.log(mergeMeetingTimes(meetings));
































