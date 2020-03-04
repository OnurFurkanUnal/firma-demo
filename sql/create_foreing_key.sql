-- Constraint: fk_key

-- ALTER TABLE public."Kitaps" DROP CONSTRAINT fk_key;

ALTER TABLE public."Kitaps"
    ADD CONSTRAINT fk_key FOREIGN KEY ("YazarId")
    REFERENCES public."Yazars" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;





-- Constraint: fk_key

-- ALTER TABLE public."Yazars" DROP CONSTRAINT fk_key;

ALTER TABLE public."Yazars"
    ADD CONSTRAINT fk_key FOREIGN KEY ("KullaniciId")
    REFERENCES public."Kullanicis" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
