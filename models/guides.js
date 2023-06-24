const db = require("../db/db.js")

const Guides = {
    findAll: () => {
        const sql = `SELECT id, guide_title, class_name, role_name, likes FROM guides order by likes`

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    },
    findById: (Id) => {
        const sql = `SELECT * FROM guides WHERE id=$1`

        return db
            .query(sql, [Id])
            .then(dbRes => dbRes.rows)
    },
    findFiltered: (className, role) => {
        const sql = "SELECT id, guide_title, class_name, role_name, likes FROM guides WHERE class_name LIKE $1 AND role_name LIKE $2"
        let classesName = `%${className}%`
        let roles = `%${role}%`

        return db
            .query(sql, [classesName, roles])
            .then(dbRes => dbRes.rows)
    },
    update: (id, likes) => {
        const sql = `
        UPDATE guides SET likes = $2 WHERE id=$1
            RETURNING *
        `
        return db.query(sql, [id, (likes + 1)])
            .then(dbRes => dbRes.rows[0])
    },
    create: (guideTitle,
        className,
        roleName,
        guideDescription,
        characterRaceSuggestion,
        headSetName,
        headArmorWeight,
        headEnchantment,
        headTrait,
        headWhereToObtain,
        shoulderSetName,
        shoulderArmorWeight,
        shoulderEnchantment,
        shoulderTrait,
        shoulderWhereToObtain,
        bodySetName,
        bodyArmorWeight,
        bodyEnchantment,
        bodyTrait,
        bodyWhereToObtain,
        handSetName,
        handArmorWeight,
        handEnchantment,
        handTrait,
        handWhereToObtain,
        beltSetName,
        beltArmorWeight,
        beltEnchantment,
        beltTrait,
        beltWhereToObtain,
        legSetName,
        legArmorWeight,
        legEnchantment,
        legTrait,
        legWhereToObtain,
        bootsSetName,
        bootsArmorWeight,
        bootsEnchantment,
        bootsTrait,
        bootsWhereToObtain,
        necklaceSetName,
        necklaceEnchantment,
        necklaceTrait,
        necklaceWhereToObtain,
        ring1SetName,
        ring1Enchantment,
        ring1Trait,
        ring1WhereToObtain,
        ring2SetName,
        ring2Enchantment,
        ring2Trait,
        ring2WhereToObtain,
        primaryMainhandSetName,
        primaryMainhandWeaponType,
        primaryMainhandEnchantment,
        primaryMainhandTrait,
        primaryMainhandWhereToObtain,
        primaryOffhandSetName,
        primaryOffhandWeaponType,
        primaryOffhandEnchantment,
        primaryOffhandTrait,
        primaryOffhandWhereToObtain,
        secondaryMainhandSetName,
        secondaryMainhandWeaponType,
        secondaryMainhandEnchantment,
        secondaryMainhandTrait,
        secondaryMainhandWhereToObtain,
        secondaryOffhandSetName,
        secondaryOffhandWeaponType,
        secondaryOffhandEnchantment,
        secondaryOffhandTrait,
        secondaryOffhandWhereToObtain,
        skillPrimary1,
        skillPrimary2,
        skillPrimary3,
        skillPrimary4,
        skillPrimary5,
        skillPrimaryUltimate,
        skillSecondary1,
        skillSecondary2,
        skillSecondary3,
        skillSecondary4,
        skillSecondary5,
        skillSecondaryUltimate,
        attributesHealth,
        attributesStamina,
        attributesMagicka,
        cpBlueSlottable1,
        cpBlueSlottable2,
        cpBlueSlottable3,
        cpBlueSlottable4,
        cpBedSlottable1,
        cpRedSlottable2,
        cpRedSlottable3,
        cpRedSlottable4,
        cpGreenSlottable1,
        cpGreenSlottable2,
        cpGreenSlottable3,
        cpGreenSlottable4,
        consumableFood,
        consumablePotion,
        mundusStone) => {
        const sql = `
                INSERT INTO movies(guide_title,
                    class_name,
                    role_name,
                    guide_description,
                    character_race_suggestion,
                    head_set_name,
                    head_armor_weight,
                    head_enchantment,
                    head_trait,
                    head_where_to_obtain,
                    shoulder_set_name,
                    shoulder_armor_weight,
                    shoulder_enchantment,
                    shoulder_trait,
                    shoulder_where_to_obtain,
                    body_set_name,
                    body_armor_weight,
                    body_enchantment,
                    body_trait,
                    body_where_to_obtain,
                    hand_set_name,
                    hand_armor_weight,
                    hand_enchantment,
                    hand_trait,
                    hand_where_to_obtain,
                    belt_set_name,
                    belt_armor_weight,
                    belt_enchantment,
                    belt_trait,
                    belt_where_to_obtain,
                    leg_set_name,
                    leg_armor_weight,
                    leg_enchantment,
                    leg_trait,
                    leg_where_to_obtain,
                    boots_set_name,
                    boots_armor_weight,
                    boots_enchantment,
                    boots_trait,
                    boots_where_to_obtain,
                    necklace_set_name,
                    necklace_enchantment,
                    necklace_trait,
                    necklace_where_to_obtain,
                    ring_1_set_name,
                    ring_1_enchantment,
                    ring_1_trait,
                    ring_1_where_to_obtain,
                    ring_2_set_name,
                    ring_2_enchantment,
                    ring_2_trait,
                    ring_2_where_to_obtain,
                    primary_mainhand_set_name,
                    primary_mainhand_weapon_type,
                    primary_mainhand_enchantment,
                    primary_mainhand_trait,
                    primary_mainhand_where_to_obtain,
                    primary_offhand_set_name,
                    primary_offhand_weapon_type,
                    primary_offhand_enchantment,
                    primary_offhand_trait,
                    primary_offhand_where_to_obtain,
                    secondary_mainhand_set_name,
                    secondary_mainhand_weapon_type,
                    secondary_mainhand_enchantment,
                    secondary_mainhand_trait,
                    secondary_mainhand_where_to_obtain,
                    secondary_offhand_set_name,
                    secondary_offhand_weapon_type,
                    secondary_offhand_enchantment,
                    secondary_offhand_trait,
                    secondary_offhand_where_to_obtain,
                    skill_primary_1,
                    skill_primary_2,
                    skill_primary_3,
                    skill_primary_4,
                    skill_primary_5,
                    skill_primary_ultimate,
                    skill_secondary_1,
                    skill_secondary_2,
                    skill_secondary_3,
                    skill_secondary_4,
                    skill_secondary_5,
                    skill_secondary_ultimate,
                    attributes_health,
                    attributes_stamina,
                    attributes_magicka,
                    cp_blue_slottable_1,
                    cp_blue_slottable_2,
                    cp_blue_slottable_3,
                    cp_blue_slottable_4,
                    cp_red_slottable_1,
                    cp_red_slottable_2,
                    cp_red_slottable_3,
                    cp_red_slottable_4,
                    cp_green_slottable_1,
                    cp_green_slottable_2,
                    cp_green_slottable_3,
                    cp_green_slottable_4,
                    consumable_food,
                    consumable_potion,
                    mundus_stone,
                    likes)
                VALUES('$1 , $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60, $61, $62, $63, $64, $65, $66, $67, $68, $69, $70, $71, $72, $73, $74, $75, $76, $77, $78, $79, $80, $81, $82, $83, $84, $85, $86, $87, $88, $89, $90, $91, $92, $93, $94, $95, $96, $97, $98, $99, $100, $101, $102, $103')
                RETURNING *
            `

        return db
            .query(sql, [guideTitle,
                className,
                roleName,
                guideDescription,
                characterRaceSuggestion,
                headSetName,
                headArmorWeight,
                headEnchantment,
                headTrait,
                headWhereToObtain,
                shoulderSetName,
                shoulderArmorWeight,
                shoulderEnchantment,
                shoulderTrait,
                shoulderWhereToObtain,
                bodySetName,
                bodyArmorWeight,
                bodyEnchantment,
                bodyTrait,
                bodyWhereToObtain,
                handSetName,
                handArmorWeight,
                handEnchantment,
                handTrait,
                handWhereToObtain,
                beltSetName,
                beltArmorWeight,
                beltEnchantment,
                beltTrait,
                beltWhereToObtain,
                legSetName,
                legArmorWeight,
                legEnchantment,
                legTrait,
                legWhereToObtain,
                bootsSetName,
                bootsArmorWeight,
                bootsEnchantment,
                bootsTrait,
                bootsWhereToObtain,
                necklaceSetName,
                necklaceEnchantment,
                necklaceTrait,
                necklaceWhereToObtain,
                ring1SetName,
                ring1Enchantment,
                ring1Trait,
                ring1WhereToObtain,
                ring2SetName,
                ring2Enchantment,
                ring2Trait,
                ring2WhereToObtain,
                primaryMainhandSetName,
                primaryMainhandWeaponType,
                primaryMainhandEnchantment,
                primaryMainhandTrait,
                primaryMainhandWhereToObtain,
                primaryOffhandSetName,
                primaryOffhandWeaponType,
                primaryOffhandEnchantment,
                primaryOffhandTrait,
                primaryOffhandWhereToObtain,
                secondaryMainhandSetName,
                secondaryMainhandWeaponType,
                secondaryMainhandEnchantment,
                secondaryMainhandTrait,
                secondaryMainhandWhereToObtain,
                secondaryOffhandSetName,
                secondaryOffhandWeaponType,
                secondaryOffhandEnchantment,
                secondaryOffhandTrait,
                secondaryOffhandWhereToObtain,
                skillPrimary1,
                skillPrimary2,
                skillPrimary3,
                skillPrimary4,
                skillPrimary5,
                skillPrimaryUltimate,
                skillSecondary1,
                skillSecondary2,
                skillSecondary3,
                skillSecondary4,
                skillSecondary5,
                skillSecondaryUltimate,
                attributesHealth,
                attributesStamina,
                attributesMagicka,
                cpBlueSlottable1,
                cpBlueSlottable2,
                cpBlueSlottable3,
                cpBlueSlottable4,
                cpBedSlottable1,
                cpRedSlottable2,
                cpRedSlottable3,
                cpRedSlottable4,
                cpGreenSlottable1,
                cpGreenSlottable2,
                cpGreenSlottable3,
                cpGreenSlottable4,
                consumableFood,
                consumablePotion,
                mundusStone, 0])
            .then(dbRes => dbRes.rows[0])
    }
}

module.exports = Guides