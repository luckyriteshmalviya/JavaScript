const str = "AAABBCCDAAA";
  for( let i = 0 ;i < str.length ;i++)
  {
    let count = 0;
    for( let j = 0 ;j < str.length ;j++)
    { 
      if( str[i] == str[j]  )
      {
        count++;
      }
    }
    res = [count + str[i]];
    console.log(res);  
  }