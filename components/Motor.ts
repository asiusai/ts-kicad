// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Fan
 *
 * KiCad symbol: `Motor:Fan`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*, TerminalBlock*.
 * Keywords: Fan Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fan extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Motor:Fan";
  override referencePrefix = "M";
}

/**
 * Fan, tacho output, 3-pin connector
 *
 * KiCad symbol: `Motor:Fan_Tacho`. Reference prefix: `M`.
 * Footprint filters: FanPinHeader*P2.54mm*Vertical*, PinHeader*P2.54mm*Vertical*, TerminalBlock*.
 * @see http://www.hardwarecanucks.com/forum/attachments/new-builds/16287d1330775095-help-chassis-power-fan-connectors-motherboard-asus_p8z68.jpg
 * Keywords: Fan Motor tacho.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fan_Tacho extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: Tacho; passive. */
  "Tacho": "3",
}) {
  override schema = "Motor:Fan_Tacho";
  override referencePrefix = "M";
}

/**
 * Fan, tacho output, 3-pin connector
 *
 * KiCad symbol: `Motor:Fan_3pin`. Reference prefix: `M`.
 * Footprint filters: FanPinHeader*P2.54mm*Vertical*, PinHeader*P2.54mm*Vertical*, TerminalBlock*.
 * @see http://www.hardwarecanucks.com/forum/attachments/new-builds/16287d1330775095-help-chassis-power-fan-connectors-motherboard-asus_p8z68.jpg
 * Keywords: Fan Motor tacho.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fan_3pin extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: Tacho; passive. */
  "Tacho": "3",
}) {
  override schema = "Motor:Fan_3pin";
  override referencePrefix = "M";
}

/**
 * Fan, tacho output, PWM input, 4-pin connector
 *
 * KiCad symbol: `Motor:Fan_Tacho_PWM`. Reference prefix: `M`.
 * Footprint filters: FanPinHeader*P2.54mm*Vertical*, PinHeader*P2.54mm*Vertical*, TerminalBlock*.
 * @see http://www.formfactors.org/developer%5Cspecs%5Crev1_2_public.pdf
 * Keywords: Fan Motor tacho PWM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fan_Tacho_PWM extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: Tacho; passive. */
  "Tacho": "3",
  /** Physical pin 4: PWM; input. */
  "PWM": "4",
}) {
  override schema = "Motor:Fan_Tacho_PWM";
  override referencePrefix = "M";
}

/**
 * Fan, tacho output, PWM input, 4-pin connector
 *
 * KiCad symbol: `Motor:Fan_4pin`. Reference prefix: `M`.
 * Footprint filters: FanPinHeader*P2.54mm*Vertical*, PinHeader*P2.54mm*Vertical*, TerminalBlock*.
 * @see http://www.formfactors.org/developer%5Cspecs%5Crev1_2_public.pdf
 * Keywords: Fan Motor tacho PWM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fan_4pin extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: Tacho; passive. */
  "Tacho": "3",
  /** Physical pin 4: PWM; input. */
  "PWM": "4",
}) {
  override schema = "Motor:Fan_4pin";
  override referencePrefix = "M";
}

/**
 * Fan without PWM or tach, alternative symbol
 *
 * KiCad symbol: `Motor:Fan_ALT`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*, TerminalBlock*.
 * Keywords: Fan Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fan_ALT extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Motor:Fan_ALT";
  override referencePrefix = "M";
}

/**
 * CPU Fan, tacho output, PWM input, 4-pin connector
 *
 * KiCad symbol: `Motor:Fan_CPU_4pin`. Reference prefix: `M`.
 * Footprint filters: FanPinHeader*P2.54mm*Vertical*, PinHeader*P2.54mm*Vertical*, TerminalBlock*.
 * @see http://www.formfactors.org/developer%5Cspecs%5Crev1_2_public.pdf
 * Keywords: Fan Motor tacho PWM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fan_CPU_4pin extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: Tacho; passive. */
  "Tacho": "3",
  /** Physical pin 4: PWM; input. */
  "PWM": "4",
}) {
  override schema = "Motor:Fan_CPU_4pin";
  override referencePrefix = "M";
}

/**
 * Fan according to IEC 60617
 *
 * KiCad symbol: `Motor:Fan_IEC-60617`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*, TerminalBlock*.
 * Keywords: fan motor iec 60617.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fan_IEC_60617 extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Motor:Fan_IEC-60617";
  override referencePrefix = "M";
}

/**
 * Fan 2302 according to ISO 14617
 *
 * KiCad symbol: `Motor:Fan_ISO-14617`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*, TerminalBlock*.
 * Keywords: fan motor iso 14617.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fan_ISO_14617 extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Motor:Fan_ISO-14617";
  override referencePrefix = "M";
}

/**
 * PC chassis fan, tacho output, 3-pin connector
 *
 * KiCad symbol: `Motor:Fan_PC_Chassis`. Reference prefix: `M`.
 * Footprint filters: FanPinHeader*P2.54mm*Vertical*, PinHeader*P2.54mm*Vertical*, TerminalBlock*.
 * @see http://www.hardwarecanucks.com/forum/attachments/new-builds/16287d1330775095-help-chassis-power-fan-connectors-motherboard-asus_p8z68.jpg
 * Keywords: Fan Motor tacho.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Fan_PC_Chassis extends Component.withPins({
  /** Physical pin 1: -; passive. */
  "-": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: Tacho; passive. */
  "Tacho": "3",
}) {
  override schema = "Motor:Fan_PC_Chassis";
  override referencePrefix = "M";
}

/**
 * AC Motor
 *
 * KiCad symbol: `Motor:Motor_AC`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*, TerminalBlock*.
 * Keywords: AC Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Motor_AC extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Motor:Motor_AC";
  override referencePrefix = "M";
}

/**
 * DC Motor
 *
 * KiCad symbol: `Motor:Motor_DC`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*, TerminalBlock*.
 * Keywords: DC Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Motor_DC extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Motor:Motor_DC";
  override referencePrefix = "M";
}

/**
 * DC Motor, alternative symbol
 *
 * KiCad symbol: `Motor:Motor_DC_ALT`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*, TerminalBlock*.
 * Keywords: DC Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Motor_DC_ALT extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
}) {
  override schema = "Motor:Motor_DC_ALT";
  override referencePrefix = "M";
}

/**
 * Servo Motor (Futaba, HiTec, JR connector)
 *
 * KiCad symbol: `Motor:Motor_Servo`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*.
 * @see http://forums.parallax.com/uploads/attachments/46831/74481.png
 * Keywords: Servo Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Motor_Servo extends Component.withPins({
  /** Physical pin 1: PWM; passive. */
  "PWM": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: -; passive. */
  "-": "3",
}) {
  override schema = "Motor:Motor_Servo";
  override referencePrefix = "M";
}

/**
 * Servo Motor (AirTronics connector)
 *
 * KiCad symbol: `Motor:Motor_Servo_AirTronics`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*.
 * @see http://forums.parallax.com/uploads/attachments/46831/74481.png
 * Keywords: Servo Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Motor_Servo_AirTronics extends Component.withPins({
  /** Physical pin 1: +; passive. */
  "+": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
  /** Physical pin 3: PWM; passive. */
  "PWM": "3",
}) {
  override schema = "Motor:Motor_Servo_AirTronics";
  override referencePrefix = "M";
}

/**
 * Servo Motor (Futuba J-connector)
 *
 * KiCad symbol: `Motor:Motor_Servo_Futaba_J`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*.
 * @see http://forums.parallax.com/uploads/attachments/46831/74481.png
 * Keywords: Servo Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Motor_Servo_Futaba_J extends Component.withPins({
  /** Physical pin 1: PWM; passive. */
  "PWM": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: -; passive. */
  "-": "3",
}) {
  override schema = "Motor:Motor_Servo_Futaba_J";
  override referencePrefix = "M";
}

/**
 * Servo Motor (Graupner JR connector)
 *
 * KiCad symbol: `Motor:Motor_Servo_Grapner_JR`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*.
 * @see http://forums.parallax.com/uploads/attachments/46831/74481.png
 * Keywords: Servo Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Motor_Servo_Grapner_JR extends Component.withPins({
  /** Physical pin 1: PWM; passive. */
  "PWM": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: -; passive. */
  "-": "3",
}) {
  override schema = "Motor:Motor_Servo_Grapner_JR";
  override referencePrefix = "M";
}

/**
 * Servo Motor (HiTec connector)
 *
 * KiCad symbol: `Motor:Motor_Servo_Hitec`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*.
 * @see http://forums.parallax.com/uploads/attachments/46831/74481.png
 * Keywords: Servo Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Motor_Servo_Hitec extends Component.withPins({
  /** Physical pin 1: PWM; passive. */
  "PWM": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: -; passive. */
  "-": "3",
}) {
  override schema = "Motor:Motor_Servo_Hitec";
  override referencePrefix = "M";
}

/**
 * Servo Motor (JR connector)
 *
 * KiCad symbol: `Motor:Motor_Servo_JR`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*.
 * @see http://forums.parallax.com/uploads/attachments/46831/74481.png
 * Keywords: Servo Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Motor_Servo_JR extends Component.withPins({
  /** Physical pin 1: PWM; passive. */
  "PWM": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: -; passive. */
  "-": "3",
}) {
  override schema = "Motor:Motor_Servo_JR";
  override referencePrefix = "M";
}

/**
 * Servo Motor (Robbe connector)
 *
 * KiCad symbol: `Motor:Motor_Servo_Robbe`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*.
 * @see http://forums.parallax.com/uploads/attachments/46831/74481.png
 * Keywords: Servo Motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Motor_Servo_Robbe extends Component.withPins({
  /** Physical pin 1: PWM; passive. */
  "PWM": "1",
  /** Physical pin 2: +; passive. */
  "+": "2",
  /** Physical pin 3: -; passive. */
  "-": "3",
}) {
  override schema = "Motor:Motor_Servo_Robbe";
  override referencePrefix = "M";
}

/**
 * 4-wire bipolar stepper motor
 *
 * KiCad symbol: `Motor:Stepper_Motor_bipolar`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*Vertical*, TerminalBlock*, Motor*.
 * @see http://www.infineon.com/dgdl/Application-Note-TLE8110EE_driving_UniPolarStepperMotor_V1.1.pdf?fileId=db3a30431be39b97011be5d0aa0a00b0
 * Keywords: bipolar stepper motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Stepper_Motor_bipolar extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: -; passive. */
  "-": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Motor:Stepper_Motor_bipolar";
  override referencePrefix = "M";
}

/**
 * 5-wire unipolar stepper motor
 *
 * KiCad symbol: `Motor:Stepper_Motor_unipolar_5pin`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*, TerminalBlock*.
 * @see http://www.infineon.com/dgdl/Application-Note-TLE8110EE_driving_UniPolarStepperMotor_V1.1.pdf?fileId=db3a30431be39b97011be5d0aa0a00b0
 * Keywords: unipolar stepper motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Stepper_Motor_unipolar_5pin extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: -; passive. */
  "-": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
}) {
  override schema = "Motor:Stepper_Motor_unipolar_5pin";
  override referencePrefix = "M";
}

/**
 * 6-wire unipolar stepper motor
 *
 * KiCad symbol: `Motor:Stepper_Motor_unipolar_6pin`. Reference prefix: `M`.
 * Footprint filters: PinHeader*P2.54mm*, TerminalBlock*.
 * @see http://www.infineon.com/dgdl/Application-Note-TLE8110EE_driving_UniPolarStepperMotor_V1.1.pdf?fileId=db3a30431be39b97011be5d0aa0a00b0
 * Keywords: unipolar stepper motor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Stepper_Motor_unipolar_6pin extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: -; passive. */
  "-": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
  /** Physical pin 5: unnamed; passive. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
}) {
  override schema = "Motor:Stepper_Motor_unipolar_6pin";
  override referencePrefix = "M";
}

