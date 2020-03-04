CREATE DATABASE firmademo
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Turkish_Turkey.1254'
    LC_CTYPE = 'Turkish_Turkey.1254'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;



-- Table: public."Kitaps"

-- DROP TABLE public."Kitaps";

CREATE TABLE public."Kitaps"
(
    id integer NOT NULL DEFAULT nextval('"Kitaps_id_seq"'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "KitapAdi" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "YazarId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Kitaps_pkey" PRIMARY KEY (id),
    CONSTRAINT fk_key FOREIGN KEY ("YazarId")
        REFERENCES public."Yazars" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Kitaps"
    OWNER to postgres;

-- Index: fki_fk_key

-- DROP INDEX public.fki_fk_key;

CREATE INDEX fki_fk_key
    ON public."Kitaps" USING btree
    ("YazarId")
    TABLESPACE pg_default;



-- Table: public."Yazars"

-- DROP TABLE public."Yazars";

CREATE TABLE public."Yazars"
(
    id integer NOT NULL DEFAULT nextval('"Yazars_id_seq"'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "YazarAdi" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "KullaniciId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Yazars_pkey" PRIMARY KEY (id),
    CONSTRAINT fkk_key FOREIGN KEY ("KullaniciId")
        REFERENCES public."Kullanicis" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Yazars"
    OWNER to postgres;

-- Index: fki_fkk_key

-- DROP INDEX public.fki_fkk_key;

CREATE INDEX fki_fkk_key
    ON public."Yazars" USING btree
    ("KullaniciId")
    TABLESPACE pg_default;





-- Table: public."Kullanicis"

-- DROP TABLE public."Kullanicis";

CREATE TABLE public."Kullanicis"
(
    id integer NOT NULL DEFAULT nextval('"Kullanicis_id_seq"'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "KullaniciAdi" character varying(255) COLLATE pg_catalog."default",
    "Sifre" character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Kullanicis_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Kullanicis"
    OWNER to postgres;