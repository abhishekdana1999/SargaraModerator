export interface UserProfile {
    MainProfileid: string;
    id: string;
    profilePic: string;
    BasicDetails: BasicDetails;
    parentialDetails: ParentialDetails;
    Status: boolean;
  }
  export interface ParentialDetails {
    FatherName: string;
    GrandFatherName: string;
    GrandMotherName: string;
    FatherOccupation: string;
    MotherOccupation: string;
    Gotra: string;
    GrandMotherGotra: string;
    MotherGotra: string;
    MotherName: string;
  }
  export interface Submmision {
    moderator: string;
    SubbmitedOn: Date;
    isProfileApproved: boolean;
  }
  
  export interface Image {
    Path: string;
    Url: string;
  }
  export interface BasicDetails {
    Email: string;
  
    Name: string;
    Images: Image[];
    Gotra: string;
    OccupationType: string;
    Occupation: string;
    Education: string;
    DateOfBirth: Date;
    Gender: string;
    PhoneNumber: string;
    Address: string;
    City: string;
    District: string;
    State: string;
  }
  
  export interface MainProfile {
    uid: string;
    photourl: string;
    Name: string;
    Image: Image;
    Address: string;
    PhoneNumber: string;
    Email: string;
    Occupation: string;
  }