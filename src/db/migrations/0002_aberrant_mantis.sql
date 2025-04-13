ALTER TABLE "plans" RENAME COLUMN "stripe_price_id" TO "price_id";--> statement-breakpoint
ALTER TABLE "plans" ALTER COLUMN "limits" SET DEFAULT '{}';--> statement-breakpoint
ALTER TABLE "plans" ALTER COLUMN "free_trial" SET DEFAULT '{}';--> statement-breakpoint
ALTER TABLE "plans" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "plans" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "plans" DROP COLUMN "lookup_key";