using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace GameChronicle.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    UserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: true),
                    SecurityStamp = table.Column<string>(type: "text", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TimeCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimeCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RoleId = table.Column<string>(type: "text", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<string>(type: "text", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    ProviderKey = table.Column<string>(type: "text", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "text", nullable: true),
                    UserId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    RoleId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Value = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserProfiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    CreateDateTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    IdentityUserId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserProfiles_AspNetUsers_IdentityUserId",
                        column: x => x.IdentityUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "UserGames",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserProfileId = table.Column<int>(type: "integer", nullable: false),
                    GameNumber = table.Column<int>(type: "integer", nullable: false),
                    LastKnownPrice = table.Column<decimal>(type: "numeric", nullable: true),
                    DateStarted = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    DateFinished = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    ReplayabilityRating = table.Column<int>(type: "integer", nullable: true),
                    FavoriteRanking = table.Column<int>(type: "integer", nullable: true),
                    TimeCategoryId = table.Column<int>(type: "integer", nullable: false),
                    isCompleted = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserGames", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserGames_TimeCategories_TimeCategoryId",
                        column: x => x.TimeCategoryId,
                        principalTable: "TimeCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserGames_UserProfiles_UserProfileId",
                        column: x => x.UserProfileId,
                        principalTable: "UserProfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    GameId = table.Column<int>(type: "integer", nullable: false),
                    UserGameId = table.Column<int>(type: "integer", nullable: false),
                    Text = table.Column<string>(type: "text", nullable: false),
                    ReviewDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CumulativeRating = table.Column<int>(type: "integer", nullable: false),
                    StoryRating = table.Column<int>(type: "integer", nullable: false),
                    WorldDesignRating = table.Column<int>(type: "integer", nullable: false),
                    GameplayRating = table.Column<int>(type: "integer", nullable: false),
                    VisualsRating = table.Column<int>(type: "integer", nullable: false),
                    CohesionRating = table.Column<int>(type: "integer", nullable: false),
                    SoundtrackRating = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reviews_UserGames_UserGameId",
                        column: x => x.UserGameId,
                        principalTable: "UserGames",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", "2593f51d-9818-4240-90b8-08cc0c597d88", "Admin", "admin" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", 0, "dd75389d-d243-4b4f-904e-6867e2de2508", "admina@strator.comx", false, false, null, null, null, "AQAAAAEAACcQAAAAEBLX7NN9KUS0399o6h476PhNhyFrJHS8Y8PHbHZcYCUoczFNRfkX8DiV6LcnmVZHnA==", null, false, "99a8076f-c2d0-4fcd-a2b3-4ecb43dbdf18", false, "Administrator" });

            migrationBuilder.InsertData(
                table: "TimeCategories",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "In Progress" },
                    { 2, "Up Next" },
                    { 3, "Later" },
                    { 4, "Eventually" },
                    { 5, "Done" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f" });

            migrationBuilder.InsertData(
                table: "UserProfiles",
                columns: new[] { "Id", "Address", "CreateDateTime", "FirstName", "IdentityUserId", "LastName" },
                values: new object[] { 1, "101 Main Street", new DateTime(2023, 10, 16, 0, 0, 0, 0, DateTimeKind.Unspecified), "Admina", "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", "Strator" });

            migrationBuilder.InsertData(
                table: "UserGames",
                columns: new[] { "Id", "DateFinished", "DateStarted", "FavoriteRanking", "GameNumber", "LastKnownPrice", "ReplayabilityRating", "TimeCategoryId", "UserProfileId", "isCompleted" },
                values: new object[,]
                {
                    { 1, null, null, 1, 326243, 39.59m, 8, 5, 1, false },
                    { 2, null, null, 2, 2551, 59.99m, 8, 5, 1, false },
                    { 3, null, null, 3, 3387, 19.99m, 8, 5, 1, false },
                    { 4, null, null, 4, 50734, 59.99m, 8, 5, 1, false },
                    { 5, null, null, 5, 3990, 19.99m, 8, 5, 1, false },
                    { 6, null, null, 6, 28, null, 6, 5, 1, false },
                    { 7, null, null, 7, 638654, null, 8, 5, 1, false },
                    { 8, null, null, 8, 3070, null, 9, 5, 1, false },
                    { 9, null, null, null, 22513, null, 5, 5, 1, false },
                    { 10, null, null, 9, 3556, null, 7, 5, 1, false },
                    { 11, null, new DateTime(2023, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 579507, null, null, 1, 1, false },
                    { 12, null, new DateTime(2023, 9, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 2454, null, null, 1, 1, false },
                    { 13, new DateTime(2023, 9, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 7, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 58861, null, null, 5, 1, false },
                    { 14, new DateTime(2023, 9, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 9, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 452635, null, null, 5, 1, false },
                    { 15, new DateTime(2023, 9, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 8, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 368952, null, null, 5, 1, false },
                    { 16, null, null, null, 892902, null, null, 3, 1, false },
                    { 17, null, null, null, 605674, null, null, 3, 1, false },
                    { 18, null, null, null, 840776, null, null, 3, 1, false },
                    { 19, null, new DateTime(2022, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 452639, null, null, 5, 1, false },
                    { 20, new DateTime(2022, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2022, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 278, null, null, 5, 1, false },
                    { 21, new DateTime(2022, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2022, 7, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 58175, null, null, 5, 1, false },
                    { 22, new DateTime(2022, 8, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2022, 7, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 258322, null, null, 5, 1, false },
                    { 23, new DateTime(2021, 6, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 5, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 864, null, null, 5, 1, false },
                    { 24, new DateTime(2021, 2, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 1, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 4248, null, null, 5, 1, false },
                    { 25, new DateTime(2021, 4, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 3, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 8146, null, null, 5, 1, false },
                    { 26, new DateTime(2021, 5, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2022, 3, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 4286, null, null, 5, 1, false },
                    { 27, new DateTime(2021, 6, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2022, 5, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 4427, null, null, 5, 1, false },
                    { 28, new DateTime(2022, 12, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2022, 10, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 638650, null, null, 5, 1, false },
                    { 29, new DateTime(2022, 12, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2022, 10, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), 11, 28154, null, null, 5, 1, false },
                    { 30, new DateTime(2022, 4, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 2, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 19590, null, null, 5, 1, false },
                    { 31, new DateTime(2022, 6, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 4, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 28199, null, null, 5, 1, false },
                    { 32, null, null, null, 58773, null, null, 2, 1, false },
                    { 33, null, null, null, 564757, null, null, 2, 1, false },
                    { 34, null, null, null, 846303, null, null, 2, 1, false },
                    { 35, null, null, null, 650621, null, null, 2, 1, false },
                    { 36, null, null, null, 793647, null, null, 2, 1, false },
                    { 37, null, null, null, 9767, null, null, 2, 1, false },
                    { 38, null, null, null, 22121, null, null, 2, 1, false },
                    { 39, null, null, null, 2093, null, null, 2, 1, false }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_UserGameId",
                table: "Reviews",
                column: "UserGameId");

            migrationBuilder.CreateIndex(
                name: "IX_UserGames_TimeCategoryId",
                table: "UserGames",
                column: "TimeCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_UserGames_UserProfileId",
                table: "UserGames",
                column: "UserProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfiles_IdentityUserId",
                table: "UserProfiles",
                column: "IdentityUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Reviews");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "UserGames");

            migrationBuilder.DropTable(
                name: "TimeCategories");

            migrationBuilder.DropTable(
                name: "UserProfiles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
