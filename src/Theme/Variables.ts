/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export enum Colors {
  // TRANSPARENT = "rgba(0,0,0,0)",
  // INPUT_BACKGROUND = "#FFFFFF",
  	WHITE = "#ffffff",
  // TEXT = "#212529",
  // PRIMARY = "#E14032",
  // SUCCESS = "#28a745",
  // ERROR = "#dc3545",
	PRIMARY = "#356859",
	ON_PRIMARY_CONTAINER = "#7EF8D5",

	PRIMARY70 = "#3EBF9F",
	NEUTRAL99 = "#FFFBE6",
	SUFACE_TINT = "#006B56",
	INVERSE_PRIMARY = "#5FDBBA",
	TERTIARY = "#FF5722",

	SUFACE_TINT_COLOR = "#5ACCAE",
	ERROR60 = "#FF5449",
}

// export enum NavigationColors {
//   PRIMARY = Colors.PRIMARY,
// }

/**
 * FontSize
 */
export enum FontSize {
	SMALL = 36,
	REGULAR = 45,
	LARGE = 57,
}

export enum Icons{
	CLOSE_CIRCLE = "close-circle-outline",
	ARROW_LEFT = "arrow-left",
	ARROW_RIGHT = "arrow-right",
	HOME = "home-outline",
	HISTORY = "calendar-month",
	WALLET = "wallet-outline",
	BUDGET = "briefcase-outline",
	ACCOUNT = "account-circle-outline",
	PLUS = "plus-circle",
	LOCATION = "map-marker",
	FROM_ACCOUNT = "account-multiple",
	PENCIL = "pencil",
	BELL = "bell-outline",
	IMAGE = "image-area",

	CASH_IN = "bank-transfer-in",
	CASH_OUT = "bank-transfer-out",

	FOOD = "food-fork-drink",
	SHOPPING = "shopping",
	TRANSPORTATION = "bus",
	HEALTH = "doctor",
	EDUCATION = "book-account-outline",
	ENTERTAINMENT = "television-play",
	FAMILY = "home-account",
	GIFT = "gift-outline",
	INSURANCES = "card-account-details-outline",
	OUTGOING_TRANSFER = "bank-transfer",
	// - bill
	BILL = "newspaper"
}

/**
 * Metrics Sizes
 */
// const tiny = 5; // 10
// const small = tiny * 2; // 10
// const regular = tiny * 3; // 15
// const large = regular * 2; // 30

// export enum MetricsSizes {
//   TINY = tiny,
//   SMALL = small,
//   REGULAR = regular,
//   LARGE = large,
// }

// Phuong Ngo's theme
// yep I am personally more familiar making UI elements using these colors
export enum MyTheme {
    BLACK = "#222222",
    WHITE = "#FFFFFF",
    BLUE = "#4B9CFC",
    YELLOW = "#FFD966",
    RED = "#F5707A",
    GREEN = "#4BD396",
    ORANGE = "#FF9800",
    PINK = "#F06292",
    PURPLE = "#CA498C",
    LAGOON = "#3AC9D6",
    GOLD = "#D9B563",
    GRAY = "#CCCCCC",
    DARKGRAY = "#575A65",
    LIGHTBLUE = "#A4D9FF",
    DARKBLUE = "#023E88",
}
