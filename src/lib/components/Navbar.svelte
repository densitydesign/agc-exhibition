<script lang="ts">
    import { language } from '$lib/stores'; // Adjust the path as necessary

    function setLanguage(lang: string) {
        language.set(lang);
    }
</script>

<nav>
    <div>
        {#if $language === 'IT'}
            Progetti
        {:else}
            Projects
        {/if}
    </div>
    <div>
        <span 
            on:click={() => setLanguage('IT')} 
            id="it" 
            class="lang"
            class:bold={$language === 'IT'}>IT</span>
        /
        <span 
            on:click={() => setLanguage('EN')} 
            id="en" 
            class="lang"
            class:bold={$language === 'EN'}>EN</span>
    </div>
</nav>

<style>
    nav {
        position: absolute;
        width: 100%; 
        display: flex;
        padding: 24px;
        align-items: center; 
        justify-content: space-between;
        box-sizing: border-box;
        font-size: 20px;

    }

    nav > :last-child {
        margin-left: 24px; 
        cursor: pointer;
    }

    .bold {
        font-weight: bold;
    }

    @media (max-width: 768px) {
        nav {
            font-size: 16px; 
        }
    }
</style>