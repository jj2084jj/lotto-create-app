export default function useNumberCreate(num: number) {
  const numArr: any = [];

  for (let i = 0; i < num; i++) {
    numArr.push({
      value: i + 1,
      active: false,
    });
  }

  return numArr;
}
