// Auto-aggregator: import every unit here and add it to the array.
// The sidebar and navigation automatically reflect any units in this list —
// no other code needs to change when a new unit is added.

import type { Unit } from '../../types/unit';
import unit1 from './unit1';
import unit2 from './unit2';
import unit3 from './unit3';

// Add new units to this array — order determines sidebar order
const units: Unit[] = [unit1, unit2, unit3];

export default units;
