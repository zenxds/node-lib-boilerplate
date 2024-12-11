export function getHourTimeStamp(hour?: number): number {
  const n = hour || 1

  // 不启用缓存
  if (n < 0) {
    return new Date().getTime()
  }

  return Math.floor(new Date().getTime() / 3600000 / n)
}
