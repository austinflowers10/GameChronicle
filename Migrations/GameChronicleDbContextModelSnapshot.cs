﻿// <auto-generated />
using System;
using GameChronicle.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace GameChronicle.Migrations
{
    [DbContext(typeof(GameChronicleDbContext))]
    partial class GameChronicleDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("GameChronicle.Models.Review", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("CohesionRating")
                        .HasColumnType("integer");

                    b.Property<int>("CumulativeRating")
                        .HasColumnType("integer");

                    b.Property<int>("GameId")
                        .HasColumnType("integer");

                    b.Property<int>("GameplayRating")
                        .HasColumnType("integer");

                    b.Property<DateTime>("ReviewDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("SoundtrackRating")
                        .HasColumnType("integer");

                    b.Property<int>("StoryRating")
                        .HasColumnType("integer");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("UserGameId")
                        .HasColumnType("integer");

                    b.Property<int>("VisualsRating")
                        .HasColumnType("integer");

                    b.Property<int>("WorldDesignRating")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserGameId");

                    b.ToTable("Reviews");
                });

            modelBuilder.Entity("GameChronicle.Models.TimeCategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("TimeCategories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "In Progress"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Up Next"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Later"
                        },
                        new
                        {
                            Id = 4,
                            Name = "Eventually"
                        },
                        new
                        {
                            Id = 5,
                            Name = "Done"
                        });
                });

            modelBuilder.Entity("GameChronicle.Models.UserGame", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("DateFinished")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime?>("DateStarted")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int?>("FavoriteRanking")
                        .HasColumnType("integer");

                    b.Property<int>("GameNumber")
                        .HasColumnType("integer");

                    b.Property<decimal?>("LastKnownPrice")
                        .HasColumnType("numeric");

                    b.Property<int?>("ReplayabilityRating")
                        .HasColumnType("integer");

                    b.Property<int>("TimeCategoryId")
                        .HasColumnType("integer");

                    b.Property<int>("UserProfileId")
                        .HasColumnType("integer");

                    b.Property<bool>("isCompleted")
                        .HasColumnType("boolean");

                    b.HasKey("Id");

                    b.HasIndex("TimeCategoryId");

                    b.HasIndex("UserProfileId");

                    b.ToTable("UserGames");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            FavoriteRanking = 1,
                            GameNumber = 326243,
                            LastKnownPrice = 39.59m,
                            ReplayabilityRating = 8,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 2,
                            FavoriteRanking = 2,
                            GameNumber = 2551,
                            LastKnownPrice = 59.99m,
                            ReplayabilityRating = 8,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 3,
                            FavoriteRanking = 3,
                            GameNumber = 3387,
                            LastKnownPrice = 19.99m,
                            ReplayabilityRating = 8,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 4,
                            FavoriteRanking = 4,
                            GameNumber = 50734,
                            LastKnownPrice = 59.99m,
                            ReplayabilityRating = 8,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 5,
                            FavoriteRanking = 5,
                            GameNumber = 3990,
                            LastKnownPrice = 19.99m,
                            ReplayabilityRating = 8,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 6,
                            FavoriteRanking = 6,
                            GameNumber = 28,
                            ReplayabilityRating = 6,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 7,
                            FavoriteRanking = 7,
                            GameNumber = 638654,
                            ReplayabilityRating = 8,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 8,
                            FavoriteRanking = 8,
                            GameNumber = 3070,
                            ReplayabilityRating = 9,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 9,
                            FavoriteRanking = 9,
                            GameNumber = 22513,
                            ReplayabilityRating = 5,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 10,
                            FavoriteRanking = 10,
                            GameNumber = 3556,
                            ReplayabilityRating = 7,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 11,
                            DateStarted = new DateTime(2023, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 579507,
                            TimeCategoryId = 1,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 12,
                            DateStarted = new DateTime(2023, 9, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 2454,
                            TimeCategoryId = 1,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 13,
                            DateFinished = new DateTime(2023, 9, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2023, 7, 15, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 58861,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 14,
                            DateFinished = new DateTime(2023, 9, 30, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2023, 9, 11, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 452635,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 15,
                            DateFinished = new DateTime(2023, 9, 30, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2023, 8, 11, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 368952,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 16,
                            GameNumber = 892902,
                            TimeCategoryId = 3,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 17,
                            GameNumber = 605674,
                            TimeCategoryId = 3,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 18,
                            GameNumber = 840776,
                            TimeCategoryId = 3,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 19,
                            DateStarted = new DateTime(2022, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 452639,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 20,
                            DateFinished = new DateTime(2022, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2022, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 278,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 21,
                            DateFinished = new DateTime(2022, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2022, 7, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 58175,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 22,
                            DateFinished = new DateTime(2022, 8, 27, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2022, 7, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 258322,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 23,
                            DateFinished = new DateTime(2021, 6, 27, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2021, 5, 12, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 864,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 24,
                            DateFinished = new DateTime(2021, 2, 27, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2021, 1, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 4248,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 25,
                            DateFinished = new DateTime(2021, 4, 14, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2021, 3, 7, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 8146,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 26,
                            DateFinished = new DateTime(2021, 5, 21, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2022, 3, 3, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 4286,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 27,
                            DateFinished = new DateTime(2021, 6, 30, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2022, 5, 30, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 4427,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 28,
                            DateFinished = new DateTime(2022, 12, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2022, 10, 15, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 638650,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 29,
                            DateFinished = new DateTime(2022, 12, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2022, 10, 15, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FavoriteRanking = 11,
                            GameNumber = 28154,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 30,
                            DateFinished = new DateTime(2022, 4, 12, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2023, 2, 9, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 19590,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 31,
                            DateFinished = new DateTime(2022, 6, 9, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            DateStarted = new DateTime(2023, 4, 13, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            GameNumber = 28199,
                            TimeCategoryId = 5,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 32,
                            GameNumber = 58773,
                            TimeCategoryId = 2,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 33,
                            GameNumber = 564757,
                            TimeCategoryId = 2,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 34,
                            GameNumber = 846303,
                            TimeCategoryId = 2,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 35,
                            GameNumber = 650621,
                            TimeCategoryId = 2,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 36,
                            GameNumber = 793647,
                            TimeCategoryId = 2,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 37,
                            GameNumber = 9767,
                            TimeCategoryId = 2,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 38,
                            GameNumber = 22121,
                            TimeCategoryId = 2,
                            UserProfileId = 1,
                            isCompleted = false
                        },
                        new
                        {
                            Id = 39,
                            GameNumber = 2093,
                            TimeCategoryId = 2,
                            UserProfileId = 1,
                            isCompleted = false
                        });
                });

            modelBuilder.Entity("GameChronicle.Models.UserProfile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreateDateTime")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<string>("IdentityUserId")
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("IdentityUserId");

                    b.ToTable("UserProfiles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "101 Main Street",
                            CreateDateTime = new DateTime(2023, 10, 16, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FirstName = "Admina",
                            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            LastName = "Strator"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
                            ConcurrencyStamp = "4f4bc5d7-b45e-4906-86d5-ede401d23c25",
                            Name = "Admin",
                            NormalizedName = "admin"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("integer");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("boolean");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("boolean");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("boolean");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("text");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("boolean");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "b01f3896-bda3-4c21-b5c9-01b0e5b1efa7",
                            Email = "admina@strator.comx",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAEAACcQAAAAEKAM1w2q94ERDp2IdPXVRvAojIDbD8saYygMkCPtiFbt/ML8Gc2OeZFgp1b5P7MXUw==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "832059a1-8e69-4352-a2f9-35e355f99b5f",
                            TwoFactorEnabled = false,
                            UserName = "Administrator"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("text");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .HasColumnType("text");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);

                    b.HasData(
                        new
                        {
                            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("GameChronicle.Models.Review", b =>
                {
                    b.HasOne("GameChronicle.Models.UserGame", "UserGame")
                        .WithMany("Reviews")
                        .HasForeignKey("UserGameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("UserGame");
                });

            modelBuilder.Entity("GameChronicle.Models.UserGame", b =>
                {
                    b.HasOne("GameChronicle.Models.TimeCategory", "TimeCategory")
                        .WithMany()
                        .HasForeignKey("TimeCategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GameChronicle.Models.UserProfile", "UserProfile")
                        .WithMany()
                        .HasForeignKey("UserProfileId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("TimeCategory");

                    b.Navigation("UserProfile");
                });

            modelBuilder.Entity("GameChronicle.Models.UserProfile", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", "IdentityUser")
                        .WithMany()
                        .HasForeignKey("IdentityUserId");

                    b.Navigation("IdentityUser");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("GameChronicle.Models.UserGame", b =>
                {
                    b.Navigation("Reviews");
                });
#pragma warning restore 612, 618
        }
    }
}
