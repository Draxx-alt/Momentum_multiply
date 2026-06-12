-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "Pillar" AS ENUM ('EAT', 'SLEEP', 'MOVE', 'BREATHE', 'CONNECT');

-- CreateEnum
CREATE TYPE "EmotionalState" AS ENUM ('OVERWHELMED', 'BURNT_OUT', 'UNMOTIVATED', 'STUCK', 'ANXIOUS', 'TIRED', 'DISCONNECTED', 'UNFOCUSED', 'LOST', 'READY_FOR_CHANGE', 'CURIOUS', 'HOPEFUL');

-- CreateEnum
CREATE TYPE "CampaignPhase" AS ENUM ('PHASE_1_IGNITE', 'PHASE_2_ENGAGE', 'PHASE_3_BUILD');

-- CreateEnum
CREATE TYPE "Activation" AS ENUM ('FUTURE_SELF_LETTER', 'THE_FUTURE_CALL', 'BLUEPRINT_OF_YOU', 'PRESCRIPTION_FOR_YOUR_FUTURE_SELF', 'NEXT_SELF_WALL', 'UNLOCKED_PODCAST', 'SARAY_KHUMALO_WEEKLY_CHALLENGES');

-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "LetterDeliveryStatus" AS ENUM ('PENDING', 'DELIVERED', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "CompetitionEntrySource" AS ENUM ('FUTURE_SELF_LETTER', 'THE_FUTURE_CALL', 'BLUEPRINT_OF_YOU', 'NEXT_SELF_WALL', 'PODCAST_LISTEN', 'WEEKLY_CHALLENGE', 'DIRECT');

-- CreateEnum
CREATE TYPE "ConsentType" AS ENUM ('DATA_PROCESSING', 'MARKETING_COMMUNICATIONS', 'COMPETITION_ENTRY', 'LETTER_DELIVERY');

-- CreateEnum
CREATE TYPE "MemberStatus" AS ENUM ('ACTIVE_MULTIPLY_MEMBER', 'MOMENTUM_MEMBER_NOT_MULTIPLY', 'NON_MEMBER');

-- CreateEnum
CREATE TYPE "AccountProvider" AS ENUM ('MULTIPLY_OAUTH', 'SESSION');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'MODERATOR', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "multiplyMemberId" TEXT,
    "isMember" BOOLEAN NOT NULL DEFAULT false,
    "accountProvider" "AccountProvider" NOT NULL DEFAULT 'SESSION',
    "sessionId" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "consentType" "ConsentType" NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "withdrawnAt" TIMESTAMP(3),
    "consentedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Consent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FutureSelfLetter" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "letterContent" TEXT NOT NULL,
    "scheduledDeliveryDate" TIMESTAMP(3) NOT NULL,
    "deliveryStatus" "LetterDeliveryStatus" NOT NULL DEFAULT 'PENDING',
    "pdfUrl" TEXT,
    "deliveredAt" TIMESTAMP(3),
    "imageUploadUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FutureSelfLetter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmotionalStateSelection" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "sessionId" TEXT,
    "emotionalState" "EmotionalState" NOT NULL,
    "flippedToView" BOOLEAN NOT NULL DEFAULT false,
    "partnerRecommended" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmotionalStateSelection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NextSelfWallPost" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT,
    "approvalStatus" "ApprovalStatus" NOT NULL DEFAULT 'PENDING',
    "moderatedBy" TEXT,
    "moderatedAt" TIMESTAMP(3),
    "rejectionReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NextSelfWallPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitionEntry" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mobileNumber" TEXT,
    "memberStatus" "MemberStatus" NOT NULL,
    "source" "CompetitionEntrySource" NOT NULL,
    "entryCount" INTEGER NOT NULL DEFAULT 1,
    "letterId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompetitionEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProgression" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "phase" "CampaignPhase" NOT NULL,
    "activation" "Activation" NOT NULL,
    "metadata" JSONB,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserProgression_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeCompletion" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "weekNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "proofUrl" TEXT,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChallengeCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PodcastEngagement" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "episodeId" TEXT NOT NULL,
    "episodeTitle" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "progressSeconds" INTEGER,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PodcastEngagement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_multiplyMemberId_key" ON "User"("multiplyMemberId");

-- CreateIndex
CREATE UNIQUE INDEX "User_sessionId_key" ON "User"("sessionId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_multiplyMemberId_idx" ON "User"("multiplyMemberId");

-- CreateIndex
CREATE INDEX "User_sessionId_idx" ON "User"("sessionId");

-- CreateIndex
CREATE INDEX "User_accountProvider_idx" ON "User"("accountProvider");

-- CreateIndex
CREATE INDEX "Consent_userId_idx" ON "Consent"("userId");

-- CreateIndex
CREATE INDEX "Consent_consentType_idx" ON "Consent"("consentType");

-- CreateIndex
CREATE UNIQUE INDEX "Consent_userId_consentType_key" ON "Consent"("userId", "consentType");

-- CreateIndex
CREATE INDEX "FutureSelfLetter_userId_idx" ON "FutureSelfLetter"("userId");

-- CreateIndex
CREATE INDEX "FutureSelfLetter_email_idx" ON "FutureSelfLetter"("email");

-- CreateIndex
CREATE INDEX "FutureSelfLetter_scheduledDeliveryDate_idx" ON "FutureSelfLetter"("scheduledDeliveryDate");

-- CreateIndex
CREATE INDEX "FutureSelfLetter_deliveryStatus_idx" ON "FutureSelfLetter"("deliveryStatus");

-- CreateIndex
CREATE INDEX "EmotionalStateSelection_emotionalState_idx" ON "EmotionalStateSelection"("emotionalState");

-- CreateIndex
CREATE INDEX "EmotionalStateSelection_createdAt_idx" ON "EmotionalStateSelection"("createdAt");

-- CreateIndex
CREATE INDEX "EmotionalStateSelection_sessionId_idx" ON "EmotionalStateSelection"("sessionId");

-- CreateIndex
CREATE INDEX "NextSelfWallPost_approvalStatus_idx" ON "NextSelfWallPost"("approvalStatus");

-- CreateIndex
CREATE INDEX "NextSelfWallPost_createdAt_idx" ON "NextSelfWallPost"("createdAt");

-- CreateIndex
CREATE INDEX "NextSelfWallPost_userId_idx" ON "NextSelfWallPost"("userId");

-- CreateIndex
CREATE INDEX "CompetitionEntry_userId_idx" ON "CompetitionEntry"("userId");

-- CreateIndex
CREATE INDEX "CompetitionEntry_email_idx" ON "CompetitionEntry"("email");

-- CreateIndex
CREATE INDEX "CompetitionEntry_source_idx" ON "CompetitionEntry"("source");

-- CreateIndex
CREATE INDEX "CompetitionEntry_createdAt_idx" ON "CompetitionEntry"("createdAt");

-- CreateIndex
CREATE INDEX "UserProgression_userId_idx" ON "UserProgression"("userId");

-- CreateIndex
CREATE INDEX "UserProgression_phase_idx" ON "UserProgression"("phase");

-- CreateIndex
CREATE INDEX "UserProgression_completedAt_idx" ON "UserProgression"("completedAt");

-- CreateIndex
CREATE UNIQUE INDEX "UserProgression_userId_activation_key" ON "UserProgression"("userId", "activation");

-- CreateIndex
CREATE INDEX "ChallengeCompletion_userId_idx" ON "ChallengeCompletion"("userId");

-- CreateIndex
CREATE INDEX "ChallengeCompletion_weekNumber_idx" ON "ChallengeCompletion"("weekNumber");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeCompletion_userId_challengeId_key" ON "ChallengeCompletion"("userId", "challengeId");

-- CreateIndex
CREATE INDEX "PodcastEngagement_userId_idx" ON "PodcastEngagement"("userId");

-- CreateIndex
CREATE INDEX "PodcastEngagement_episodeId_idx" ON "PodcastEngagement"("episodeId");

-- AddForeignKey
ALTER TABLE "Consent" ADD CONSTRAINT "Consent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FutureSelfLetter" ADD CONSTRAINT "FutureSelfLetter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmotionalStateSelection" ADD CONSTRAINT "EmotionalStateSelection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NextSelfWallPost" ADD CONSTRAINT "NextSelfWallPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionEntry" ADD CONSTRAINT "CompetitionEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionEntry" ADD CONSTRAINT "CompetitionEntry_letterId_fkey" FOREIGN KEY ("letterId") REFERENCES "FutureSelfLetter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgression" ADD CONSTRAINT "UserProgression_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeCompletion" ADD CONSTRAINT "ChallengeCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PodcastEngagement" ADD CONSTRAINT "PodcastEngagement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

