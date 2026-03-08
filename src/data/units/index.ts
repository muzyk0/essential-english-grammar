// Auto-aggregator: import every unit here and add it to the array.
// The sidebar and navigation automatically reflect any units in this list —
// no other code needs to change when a new unit is added.

import type { Unit } from '../../types/unit';
import unit1 from './unit1';
import unit2 from './unit2';
import unit3 from './unit3';
import unit4 from './unit4';
import unit5 from './unit5';
import unit6 from './unit6';

// Add new units to this array — order determines sidebar order
const units: Unit[] = [unit1, unit2, unit3, unit4, unit5, unit6];

export default units;
