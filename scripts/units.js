const creation = extend(UnitType, "creation", {});
creation.constructor = () => extend(LegsUnit, {});

const hostile = extend(UnitType, "hostile", {});
hostile.constructor = () => extend(UnitEntity, {})