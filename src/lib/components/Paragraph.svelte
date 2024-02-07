<script lang="ts">
    export let start: number | undefined; 
    export let span: number | undefined;
</script>

<p style="grid-column-start: {start}; grid-column-end: {start && span ? `span ${span}` : 'auto'}">
    <slot></slot>
</p>

<style>
    p {
        z-index: 100;
        margin: auto; 
        padding: 0 0 0 48px;   
        font-style: normal; 
        font-weight: 200; 
        font-size: 32px;
        line-height: 40px;
        letter-spacing: normal;
    }

    p > :global(span) {
        display: block;
        margin-bottom: 24px;
    }

    @media (max-width: 768px) {
        p {
            font-size: 24px;
            line-height: 30px;
            padding: 0; 
        }
    }
</style>