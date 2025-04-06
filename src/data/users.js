// data/users.js

const users = [
    { id: 1, name: 'Aarav Sharma', points: 543, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Sharma' },
    { id: 2, name: 'Aarav Patel', points: 666, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Patel' },
    { id: 3, name: 'Aarav Reddy', points: 423, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Reddy' },
    { id: 4, name: 'Aarav Gupta', points: 778, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Gupta' },
    { id: 5, name: 'Aarav Verma', points: 636, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Verma' },
    { id: 6, name: 'Aarav Mishra', points: 431, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Mishra' },
    { id: 7, name: 'Aarav Kulkarni', points: 862, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Kulkarni' },
    { id: 8, name: 'Aarav Joshi', points: 349, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Joshi' },
    { id: 9, name: 'Aarav Das', points: 812, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Das' },
    { id: 10, name: 'Aarav Singh', points: 307, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Singh' },
    { id: 11, name: 'Aarav Mehta', points: 930, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Mehta' },
    { id: 12, name: 'Aarav Kumar', points: 375, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Kumar' },
    { id: 13, name: 'Aarav Chopra', points: 832, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Chopra' },
    { id: 14, name: 'Aarav Bajaj', points: 319, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Bajaj' },
    { id: 15, name: 'Aarav Deshmukh', points: 236, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Deshmukh' },
    { id: 16, name: 'Aarav Tiwari', points: 153, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Tiwari' },
    { id: 17, name: 'Aarav Pandey', points: 341, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Pandey' },
    { id: 18, name: 'Aarav Thakur', points: 893, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Thakur' },
    { id: 19, name: 'Aarav Naik', points: 695, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Naik' },
    { id: 20, name: 'Aarav Bose', points: 938, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aarav%20Bose' },
    { id: 21, name: 'Vivaan Sharma', points: 269, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Sharma' },
    { id: 22, name: 'Vivaan Patel', points: 123, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Patel' },
    { id: 23, name: 'Vivaan Reddy', points: 441, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Reddy' },
    { id: 24, name: 'Vivaan Gupta', points: 817, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Gupta' },
    { id: 25, name: 'Vivaan Verma', points: 415, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Verma' },
    { id: 26, name: 'Vivaan Mishra', points: 861, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Mishra' },
    { id: 27, name: 'Vivaan Kulkarni', points: 246, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Kulkarni' },
    { id: 28, name: 'Vivaan Joshi', points: 463, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Joshi' },
    { id: 29, name: 'Vivaan Das', points: 687, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Das' },
    { id: 30, name: 'Vivaan Singh', points: 570, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Singh' },
    { id: 31, name: 'Vivaan Mehta', points: 345, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Mehta' },
    { id: 32, name: 'Vivaan Kumar', points: 396, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Kumar' },
    { id: 33, name: 'Vivaan Chopra', points: 397, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Chopra' },
    { id: 34, name: 'Vivaan Bajaj', points: 272, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Bajaj' },
    { id: 35, name: 'Vivaan Deshmukh', points: 311, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Deshmukh' },
    { id: 36, name: 'Vivaan Tiwari', points: 681, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Tiwari' },
    { id: 37, name: 'Vivaan Pandey', points: 347, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Pandey' },
    { id: 38, name: 'Vivaan Thakur', points: 952, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Thakur' },
    { id: 39, name: 'Vivaan Naik', points: 777, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Naik' },
    { id: 40, name: 'Vivaan Bose', points: 790, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vivaan%20Bose' },
    { id: 41, name: 'Aditya Sharma', points: 123, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Sharma' },
    { id: 42, name: 'Aditya Patel', points: 471, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Patel' },
    { id: 43, name: 'Aditya Reddy', points: 589, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Reddy' },
    { id: 44, name: 'Aditya Gupta', points: 268, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Gupta' },
    { id: 45, name: 'Aditya Verma', points: 173, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Verma' },
    { id: 46, name: 'Aditya Mishra', points: 951, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Mishra' },
    { id: 47, name: 'Aditya Kulkarni', points: 348, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Kulkarni' },
    { id: 48, name: 'Aditya Joshi', points: 748, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Joshi' },
    { id: 49, name: 'Aditya Das', points: 862, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Das' },
    { id: 50, name: 'Aditya Singh', points: 939, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Singh' },
    { id: 51, name: 'Aditya Mehta', points: 678, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Mehta' },
    { id: 52, name: 'Aditya Kumar', points: 766, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Kumar' },
    { id: 53, name: 'Aditya Chopra', points: 151, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Chopra' },
    { id: 54, name: 'Aditya Bajaj', points: 203, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Bajaj' },
    { id: 55, name: 'Aditya Deshmukh', points: 954, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Deshmukh' },
    { id: 56, name: 'Aditya Tiwari', points: 549, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Tiwari' },
    { id: 57, name: 'Aditya Pandey', points: 327, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Pandey' },
    { id: 58, name: 'Aditya Thakur', points: 651, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Thakur' },
    { id: 59, name: 'Aditya Naik', points: 312, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Naik' },
    { id: 60, name: 'Aditya Bose', points: 496, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aditya%20Bose' },
    { id: 61, name: 'Vihaan Sharma', points: 447, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Sharma' },
    { id: 62, name: 'Vihaan Patel', points: 526, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Patel' },
    { id: 63, name: 'Vihaan Reddy', points: 154, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Reddy' },
    { id: 64, name: 'Vihaan Gupta', points: 573, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Gupta' },
    { id: 65, name: 'Vihaan Verma', points: 177, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Verma' },
    { id: 66, name: 'Vihaan Mishra', points: 237, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Mishra' },
    { id: 67, name: 'Vihaan Kulkarni', points: 969, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Kulkarni' },
    { id: 68, name: 'Vihaan Joshi', points: 205, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Joshi' },
    { id: 69, name: 'Vihaan Das', points: 298, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Das' },
    { id: 70, name: 'Vihaan Singh', points: 458, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Singh' },
    { id: 71, name: 'Vihaan Mehta', points: 230, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Mehta' },
    { id: 72, name: 'Vihaan Kumar', points: 512, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Kumar' },
    { id: 73, name: 'Vihaan Chopra', points: 170, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Chopra' },
    { id: 74, name: 'Vihaan Bajaj', points: 152, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Bajaj' },
    { id: 75, name: 'Vihaan Deshmukh', points: 732, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Deshmukh' },
    { id: 76, name: 'Vihaan Tiwari', points: 453, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Tiwari' },
    { id: 77, name: 'Vihaan Pandey', points: 575, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Pandey' },
    { id: 78, name: 'Vihaan Thakur', points: 865, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Thakur' },
    { id: 79, name: 'Vihaan Naik', points: 264, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Naik' },
    { id: 80, name: 'Vihaan Bose', points: 114, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Vihaan%20Bose' },
    { id: 81, name: 'Arjun Sharma', points: 123, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Sharma' },
    { id: 82, name: 'Arjun Patel', points: 592, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Patel' },
    { id: 83, name: 'Arjun Reddy', points: 161, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Reddy' },
    { id: 84, name: 'Arjun Gupta', points: 647, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Gupta' },
    { id: 85, name: 'Arjun Verma', points: 145, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Verma' },
    { id: 86, name: 'Arjun Mishra', points: 308, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Mishra' },
    { id: 87, name: 'Arjun Kulkarni', points: 147, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Kulkarni' },
    { id: 88, name: 'Arjun Joshi', points: 207, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Joshi' },
    { id: 89, name: 'Arjun Das', points: 717, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Das' },
    { id: 90, name: 'Arjun Singh', points: 854, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Singh' },
    { id: 91, name: 'Arjun Mehta', points: 695, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Mehta' },
    { id: 92, name: 'Arjun Kumar', points: 897, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Kumar' },
    { id: 93, name: 'Arjun Chopra', points: 398, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Chopra' },
    { id: 94, name: 'Arjun Bajaj', points: 230, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Bajaj' },
    { id: 95, name: 'Arjun Deshmukh', points: 360, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Deshmukh' },
    { id: 96, name: 'Arjun Tiwari', points: 891, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Tiwari' },
    { id: 97, name: 'Arjun Pandey', points: 689, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Pandey' },
    { id: 98, name: 'Arjun Thakur', points: 398, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Thakur' },
    { id: 99, name: 'Arjun Naik', points: 821, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Naik' },
    { id: 100, name: 'Arjun Bose', points: 224, avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Arjun%20Bose' }
  ];
  users.sort((a, b) => b.points - a.points);
    
  
  export default users;
  