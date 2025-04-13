CREATE TABLE "plans" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"stripe_price_id" text,
	"lookup_key" text,
	"annual_discount_price_id" text,
	"limits" text NOT NULL,
	"group" text,
	"free_trial" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
