import { arrayTable } from "./const";

export const getDataForIp = (ipBaseString) => {
  const ipBaseArray = ipBaseString.split(".");
  return ipBaseArray;
};

export const getBitsOn = (subredes) => {
  let bitsOn = 0;
  for (let i = 1; i <= 9; i++) {
    if (Math.pow(2, i) >= subredes) {
      bitsOn = i;
      break;
    }
  }
  return bitsOn;
};

export const getNewMask = (bitsOn) => {
  let newMask = 0;
  for (let i = 1; i <= arrayTable.length + 1; i++) {
    newMask += arrayTable[i - 1];
    if (i === bitsOn) {
      break;
    }
  }
  return newMask;
};

export const getNumHosts = (bitsOn) => {
  const bitsOff = 8 - bitsOn;
  const numHosts = Math.pow(2, bitsOff) - 2;
  return numHosts;
};

export const getNumJumpRed = (newMask) => {
  const numJumpRed = 256 - newMask;
  return numJumpRed;
};

export const converArrayIps = (ipBaseString, subredes, saltoRed) => {
  const ipsSubneteoTable = [];

  const ipBaseArray = getDataForIp(ipBaseString);
  let ipModified = Number(ipBaseArray[3]);
  const ipBase = ipBaseArray[0] + "." + ipBaseArray[1] + "." + ipBaseArray[2];

  for (let i = 1; i < subredes + 1; i++) {
    let ob = {
      num: i,
      ip_subred: ipBase + "." + ipModified,
      ip_util: ipBase + "." + (ipModified + 1),
      ip_ultima: ipBase + "." + (ipModified + saltoRed - 2),
      ip_broadcast: ipBase + "." + (ipModified + saltoRed - 1),
    };
    ipModified += saltoRed;
    ipsSubneteoTable.push(ob);
  }
  return ipsSubneteoTable;
};

export const getMask = (maskNumber) => {
  let maskString = "";
  for (let i = 1; i < maskNumber + 1; i++) {
    maskString += "1";
    if (i % 8 === 0) {
      maskString += ".";
    }
  }
  for (let i = maskNumber + 1; i < 33; i++) {
    maskString += "0";
    if (i % 8 === 0 && i !== 32) {
      maskString += ".";
    }
  }
  return maskString;
};
