DROP TABLE "subscription" CASCADE;--> statement-breakpoint
ALTER TABLE "plans" RENAME TO "products";--> statement-breakpoint
ALTER TABLE "products" RENAME COLUMN "name" TO "slug";--> statement-breakpoint
ALTER TABLE "products" RENAME COLUMN "price_id" TO "product_id";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "annual_discount_price_id";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "limits";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "group";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "trial_days";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "stripe_customer_id";