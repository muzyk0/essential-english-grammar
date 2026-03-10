import type { ReviewPack } from '../../types/unit';
import reviewPack1to2 from './reviewPack1to2';

const reviewPacks: ReviewPack[] = [reviewPack1to2];

export function getReviewPacksForUnit(unitNumber: number) {
  return reviewPacks.filter((pack) => pack.coversUnits.includes(unitNumber));
}

export default reviewPacks;
