// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 3146:
case 937:
case 3312:
case 2027:
case 2190:
case 2096:
case 2923:
case 3369:
case 1094:
case 2818:
case 1553:
case 2431:
case 2707:
case 1125:
case 1474:
case 2593:
case 3382:
case 2778:
case 2888:
case 1322:
case 2648:
case 4014:
case 3189:
case 3185:
case 1150:
case 3462:
case 886:
case 2801:
case 707:
case 3415:
case 3963:
case 3607:
case 4042:
case 3263:
case 2131:
case 1868:
case 3391:
case 3451:
case 749:
case 735:
case 601:
case 3489:
case 2039:
case 3008:
case 28:
case 3324:
case 1445:
case 284:
case 1449:
case 2414:
case 2035:
case 3973:
case 2386:
case 3273:
case 3853:
case 3077:
case 1303:
case 895:
case 1384:
case 1718:
case 941:
case 760:
case 223:
case 3357:
case 2528:
case 2316:
case 2142:
case 2166:
case 3092:
case 1137:
case 2484:
case 1258:
case 3728:
case 2349:
case 1878:
case 2600:
case 1788:
case 2345:
case 2902:
case 4022:
case 465:
case 1486:
case 473:
case 2500:
case 1145:
case 1149:
case 2114:
case 3379:
case 3700:
case 3375:
case 3011:
case 2628:
case 166:
case 1209:
case 1010:
case 936:
case 1205:
case 1909:
case 911:
case 251:
case 645:
case 2337:
case 2103:
case 325:
case 1437:
case 2466:
case 395:
case 2184:
case 918:
case 1464:
case 1021:
case 387:
case 3059:
case 3267:
case 2697:
case 663:
case 3844:
case 341:
case 3684:
case 1401:
case 3967:
case 1368:
case 232:
case 1890:
case 727:
case 3063:
case 3934:
case 818:
case 3614:
case 348:
case 1764:
case 2850:
case 480:
case 1579:
case 1575:
case 1737:
case 2970:
case 3542:
case 2766:
case 621:
case 811:
case 2672:
case 2270:
case 2825:
case 530:
case 3882:
case 3642:
case 336:
case 3772:
case 2927:
case 1418:
case 1101:
case 311:
case 2572:
case 2296:
case 2227:
case 3514:
case 1994:
case 4078:
case 2023:
case 3100:
case 1745:
case 1822:
case 2388:
case 3830:
case 1675:
case 2714:
case 1749:
case 1241:
case 2954:
case 3812:
case 987:
case 978:
case 1488:
case 841:
case 925:
case 2784:
case 2168:
case 3797:
case 112:
case 1256:
case 3726:
case 2515:
case 2333:
case 190:
case 4068:
case 1544:
case 3211:
case 1665:
case 1005:
case 3448:
case 1612:
case 2562:
case 1910:
case 114:
case 3789:
case 3281:
case 1232:
case 2247:
case 2178:
case 2837:
case 2043:
case 689:
case 1980:
case 2551:
case 555:
case 1729:
case 3259:
case 1221:
case 986:
case 3751:
case 779:
case 1280:
case 2235:
case 2731:
case 726:
case 3208:
case 1307:
case 3073:
case 3531:
case 796:
case 2816:
case 3857:
case 3277:
case 1530:
case 805:
case 2845:
case 2685:
case 14:
case 3977:
case 2722:
case 1:
case 2689:
case 1378:
case 2098:
case 2960:
case 2776:
case 2646:
case 1058:
case 2662:
case 3824:
case 23:
case 3690:
case 1691:
case 1133:
case 1644:
case 1569:
case 1803:
case 2407:
case 1534:
case 442:
case 1567:
case 349:
case 335:
case 2536:
case 2405:
case 2409:
case 3811:
case 652:
case 2617:
case 1198:
case 1242:
case 3855:
case 2937:
case 926:
case 1770:
case 3859:
case 1305:
case 307:
case 699:
case 2158:
case 2237:
case 1266:
case 3979:
case 2687:
case 2571:
case 2033:
case 1102:
case 3771:
case 1832:
case 3279:
case 2264:
case 574:
case 412:
case 567:
case 2794:
case 3053:
case 1914:
case 3787:
case 2945:
case 3541:
case 1540:
case 319:
case 1727:
case 2105:
case 2216:
case 3138:
case 1796:
case 676:
case 786:
case 3957:
case 143:
case 2839:
case 2835:
case 2636:
case 1984:
case 3717:
case 1284:
case 2517:
case 3556:
case 1402:
case 3924:
case 2286:
case 664:
case 1990:
case 66:
case 677:
case 2001:
case 787:
case 806:
case 3834:
case 3799:
case 2661:
case 860:
case 725:
case 1123:
case 3795:
case 270:
case 1511:
case 2595:
case 350:
case 3991:
case 2599:
case 3867:
case 2780:
case 414:
case 2229:
case 771:
case 2721:
case 572:
case 1608:
case 2925:
case 4009:
case 3521:
case 3580:
case 1581:
case 1747:
case 1520:
case 1068:
case 202:
case 2250:
case 2732:
case 1841:
case 1681:
case 3404:
case 3483:
case 3930:
case 1922:
case 2827:
case 4058:
case 1423:
case 1659:
case 1655:
case 3282:
case 3840:
case 4:
case 850:
case 2974:
case 3965:
case 3306:
case 556:
case 2695:
case 3269:
case 985:
case 2699:
case 1760:
case 65:
case 3610:
case 1276:
case 2045:
case 885:
case 4056:
case 1506:
case 210:
case 3195:
case 3253:
case 294:
case 3873:
case 2504:
case 2016:
case 718:
case 29:
case 2583:
case 224:
case 827:
case 3392:
case 2132:
case 3377:
case 4094:
case 3461:
case 2339:
case 1207:
case 474:
case 2121:
case 467:
case 711:
case 2086:
case 2613:
case 1139:
case 1321:
case 3355:
case 1380:
case 3381:
case 2410:
case 3320:
case 748:
case 2347:
case 3152:
case 327:
case 906:
case 1042:
case 2604:
case 1310:
case 609:
case 2683:
case 1160:
case 1606:
case 3311:
case 2064:
case 130:
case 3079:
case 2421:
case 165:
case 173:
case 2218:
case 3136:
case 949:
case 1798:
case 2918:
case 3806:
case 1427:
case 2823:
case 1356:
case 3487:
case 2494:
case 1031:
case 456:
case 3171:
case 2988:
case 3065:
case 1454:
case 2288:
case 1702:
case 907:
case 2758:
case 326:
case 3605:
case 269:
case 2456:
case 396:
case 2327:
case 3863:
case 631:
case 3505:
case 259:
case 919:
case 896:
case 1090:
case 2370:
case 616:
case 2201:
case 826:
case 3187:
case 705:
case 3091:
case 514:
case 2194:
case 51:
case 472:
case 3471:
case 3334:
case 2025:
case 737:
case 4010:
case 466:
case 3367:
case 2050:
case 2738:
case 2658:
case 1062:
case 90:
case 3201:
case 121:
case 904:
case 3370:
case 3901:
case 191:
case 359:
case 1140:
case 2436:
case 1467:
case 642:
case 2863:
case 2509:
case 1900:
case 2091:
case 2044:
case 1200:
case 2187:
case 452:
case 198:
case 429:
case 128:
case 547:
case 3050:
case 163:
case 175:
case 1089:
case 2117:
case 392:
case 153:
case 1317:
case 3823:
case 1598:
case 1167:
case 1440:
case 822:
case 612:
case 3218:
case 3354:
case 3494:
case 734:
case 73:
case 2082:
case 1643:
case 1773:
case 2487:
case 3288:
case 2065:
case 1387:
case 1502:
case 462:
case 2558:
case 1813:
case 3456:
case 1928:
case 3396:
case 296:
case 859:
case 369:
case 2605:
case 2609:
case 3638:
case 2340:
case 1838:
case 340:
case 189:
case 46:
case 3613:
case 2152:
case 1248:
case 1177:
case 538:
case 297:
case 1192:
case 824:
case 614:
case 1481:
case 61:
case 3421:
case 1399:
case 1459:
case 3480:
case 1623:
case 516:
case 2161:
case 810:
case 2253:
case 2195:
case 1706:
case 3898:
case 1408:
case 1523:
case 970:
case 383:
case 32:
case 3583:
case 3016:
case 3504:
case 3802:
case 1492:
case 1352:
case 644:
case 1181:
case 1120:
case 2377:
case 3132:
case 3121:
case 3086:
case 2024:
case 3339:
case 3335:
case 546:
case 840:
case 3552:
case 1647:
case 802:
case 2752:
case 2230:
case 2404:
case 2840:
case 2680:
case 2621:
case 1708:
case 3896:
case 1313:
case 3088:
case 3699:
case 2265:
case 3274:
case 2761:
case 2269:
case 576:
case 3695:
case 723:
case 2306:
case 2413:
case 3323:
case 1817:
case 2969:
case 2912:
case 667:
case 2212:
case 78:
case 206:
case 1792:
case 924:
case 2183:
case 2834:
case 3710:
case 101:
case 657:
case 994:
case 1962:
case 2104:
case 3599:
case 1836:
case 1919:
case 2991:
case 1915:
case 599:
case 1463:
case 910:
case 1219:
case 2244:
case 370:
case 1711:
case 983:
case 3661:
case 2799:
case 409:
case 2580:
case 3929:
case 2521:
case 4038:
case 3925:
case 1251:
case 2113:
case 1759:
case 1639:
case 1755:
case 3225:
case 1635:
case 1871:
case 3732:
case 3250:
case 1547:
case 1285:
case 1989:
case 2541:
case 2877:
case 554:
case 55:
case 2594:
case 1473:
case 2053:
case 3245:
case 1852:
case 3587:
case 3302:
case 3741:
case 304:
case 1527:
case 3835:
case 3839:
case 2957:
case 1272:
case 656:
case 2808:
case 30:
case 2257:
case 1972:
case 333:
case 2556:
case 1997:
case 3517:
case 3458:
case 1926:
case 115:
case 1297:
case 1554:
case 2224:
case 3986:
case 416:
case 1173:
case 2736:
case 2656:
case 1767:
case 2811:
case 2438:
case 833:
case 3405:
case 3536:
case 235:
case 1048:
case 1627:
case 3237:
case 438:
case 1570:
case 666:
case 145:
case 139:
case 2859:
case 80:
case 804:
case 2855:
case 2881:
case 564:
case 3264:
case 588:
case 2275:
case 2820:
case 56:
case 2279:
case 2694:
case 577:
case 3964:
case 2975:
case 2979:
case 3816:
case 4028:
case 553:
case 1453:
case 3935:
case 2208:
case 3651:
case 1872:
case 3731:
case 1629:
case 3235:
case 3849:
case 3098:
case 3689:
case 1252:
case 2977:
case 303:
case 1730:
case 2522:
case 2148:
case 2690:
case 33:
case 2824:
case 2493:
case 1574:
case 1897:
case 3619:
case 3002:
case 982:
case 1261:
case 1769:
case 1765:
case 3615:
case 2715:
case 1674:
case 2719:
case 2211:
case 1999:
case 1995:
case 3333:
case 630:
case 3515:
case 408:
case 2676:
case 2746:
case 3562:
case 834:
case 1038:
case 83:
case 2448:
case 109:
case 3178:
case 3585:
case 2622:
case 2281:
case 3947:
case 2255:
case 2193:
case 2955:
case 401:
case 1529:
case 1525:
case 759:
case 3043:
case 3837:
case 2959:
case 2666:
case 1637:
case 3296:
case 2940:
case 951:
case 211:
case 4093:
case 3996:
case 1004:
case 2882:
case 3714:
case 3388:
case 2830:
case 3023:
case 1287:
case 3254:
case 724:
case 1586:
case 72:
case 2812:
case 794:
case 2726:
case 2797:
case 665:
case 1917:
case 2503:
case 146:
case 3874:
case 2865:
case 332:
case 2891:
case 1936:
case 2967:
case 923:
case 1819:
case 3626:
case 993:
case 445:
case 1686:
case 2063:
case 98:
case 2400:
case 2234:
case 984:
case 4048:
case 1645:
case 3850:
case 1775:
case 1889:
case 2614:
case 1649:
case 2566:
case 3742:
case 3825:
case 3829:
case 3468:
case 3270:
case 740:
case 1851:
case 2128:
case 1616:
case 3970:
case 501:
case 1095:
case 2700:
case 1688:
case 4085:
case 3500:
case 199:
case 2172:
case 3337:
case 351:
case 1938:
case 3628:
case 498:
case 861:
case 152:
case 3833:
case 3184:
case 295:
case 3466:
case 893:
case 3442:
case 2126:
case 823:
case 613:
case 2197:
case 2020:
case 770:
case 2059:
case 4046:
case 3943:
case 1475:
case 491:
case 884:
case 421:
case 2273:
case 3035:
case 384:
case 2324:
case 162:
case 2668:
case 323:
case 3298:
case 932:
case 2853:
case 3998:
case 176:
case 3060:
case 1601:
case 361:
case 1372:
case 2426:
case 3142:
case 643:
case 3403:
case 3528:
case 2357:
case 2497:
case 851:
case 1588:
case 1175:
case 1424:
case 3202:
case 3349:
case 2748:
case 3350:
case 3548:
case 1130:
case 3131:
case 2263:
case 1182:
case 2607:
case 2034:
case 1351:
case 2415:
case 181:
case 3801:
case 1319:
case 539:
case 2451:
case 1071:
case 1315:
case 934:
case 16:
case 1362:
case 2489:
case 489:
case 1112:
case 1904:
case 2162:
case 3096:
case 154:
case 3190:
case 1983:
case 2906:
case 3818:
case 2365:
case 3374:
case 3923:
case 2115:
case 1753:
case 1144:
case 1087:
case 1469:
case 3054:
case 4072:
case 2151:
case 2578:
case 3476:
case 2330:
case 3729:
case 3221:
case 1751:
case 3280:
case 3866:
case 3921:
case 2525:
case 3980:
case 2529:
case 640:
case 3433:
case 1955:
case 1981:
case 1920:
case 3932:
case 1789:
case 844:
case 1875:
case 1879:
case 31:
case 1746:
case 3910:
case 974:
case 209:
case 1448:
case 2038:
case 1762:
case 3612:
case 3009:
case 3210:
case 2153:
case 1211:
case 2744:
case 1719:
case 320:
case 2674:
case 2791:
case 2999:
case 3544:
case 683:
case 3569:
case 3803:
case 2897:
case 2574:
case 596:
case 1353:
case 2826:
case 2961:
case 890:
case 3691:
case 3774:
case 2765:
case 610:
case 3133:
case 773:
case 526:
case 3644:
case 2712:
case 3058:
case 1824:
case 1576:
case 624:
case 217:
case 957:
case 1992:
case 3512:
case 34:
case 2730:
case 2650:
case 3378:
case 1148:
case 1277:
case 2952:
case 3530:
case 460:
case 2393:
case 2453:
case 1908:
case 3582:
case 2625:
case 2629:
case 2872:
case 585:
case 231:
case 2537:
case 956:
case 1128:
case 3575:
case 597:
case 2564:
case 2971:
case 3188:
case 435:
case 449:
case 1614:
case 2775:
case 2300:
case 3764:
case 2271:
case 2779:
case 2885:
case 1934:
case 3890:
case 1844:
case 3401:
case 2936:
case 692:
case 730:
case 3368:
case 1267:
case 2236:
case 1603:
case 622:
case 1584:
case 972:
case 3956:
case 1428:
case 246:
case 1869:
case 4053:
case 2917:
case 3488:
case 118:
case 2013:
case 3786:
case 900:
case 3745:
case 3822:
case 3679:
case 2987:
case 3749:
case 3241:
case 1006:
case 3941:
case 2545:
case 1100:
case 669:
case 2637:
case 1666:
case 1240:
case 2004:
case 1772:
case 966:
case 842:
case 4030:
case 800:
case 506:
case 3788:
case 2424:
case 2372:
case 866:
case 1728:
case 276:
case 60:
case 1497:
case 1357:
case 356:
case 604:
case 2893:
case 3718:
case 872:
case 2052:
case 4069:
case 2326:
case 3303:
case 426:
case 1008:
case 1324:
case 3449:
case 496:
case 3464:
case 3080:
case 178:
case 3186:
case 187:
case 1059:
case 4091:
case 195:
case 912:
case 252:
case 1020:
case 1081:
case 2501:
case 856:
case 3905:
case 1172:
case 550:
case 3342:
case 366:
case 3209:
case 3010:
case 3701:
case 2157:
case 3116:
case 2848:
case 1379:
case 1375:
case 300:
case 1011:
case 3149:
case 1578:
case 2412:
case 1330:
case 3474:
case 1507:
case 2465:
case 2913:
case 743:
case 2469:
case 1382:
case 1151:
case 3129:
case 3041:
case 1369:
case 3094:
case 1906:
case 3553:
case 2144:
case 1119:
case 2633:
case 2753:
case 2191:
case 990:
case 1206:
case 254:
case 91:
case 1162:
case 2904:
case 1146:
case 37:
case 1040:
case 1312:
case 874:
case 288:
case 1489:
case 2362:
case 3390:
case 3450:
case 87:
case 357:
case 2112:
case 2346:
case 2165:
case 2169:
case 3868:
case 2315:
case 3429:
case 1451:
case 2533:
case 507:
case 1344:
case 2182:
case 1419:
case 497:
case 2491:
case 535:
case 1963:
case 2385:
case 944:
case 94:
case 1678:
case 485:
case 1446:
case 4075:
case 1417:
case 196:
case 4008:
case 3170:
case 1558:
case 2813:
case 744:
case 1065:
case 3454:
case 7:
case 74:
case 1069:
case 3573:
case 3031:
case 2134:
case 1806:
case 3427:
case 2598:
case 3496:
case 913:
case 1030:
case 2440:
case 2167:
case 1117:
case 2089:
case 2698:
case 865:
case 720:
case 275:
case 3470:
case 3268:
case 1367:
case 355:
case 4011:
case 790:
case 3968:
case 3154:
case 3743:
case 3673:
case 71:
case 1471:
case 505:
case 2900:
case 4081:
case 4020:
case 1044:
case 2019:
case 1091:
case 2434:
case 3127:
case 3196:
case 2062:
case 943:
case 2046:
case 1505:
case 1436:
case 2140:
case 291:
case 4055:
case 4040:
case 3858:
case 1024:
case 2492:
case 3084:
case 3147:
case 603:
case 518:
case 1392:
case 2072:
case 486:
case 1873:
case 1057:
case 1199:
case 3723:
case 712:
case 1253:
case 511:
case 3439:
case 2408:
case 2361:
case 3014:
case 830:
case 536:
case 1953:
case 3506:
case 3435:
case 1311:
case 2395:
case 330:
case 4067:
case 1079:
case 2399:
case 2459:
case 1161:
case 2192:
case 3066:
case 197:
case 3447:
case 3160:
case 2420:
case 127:
case 3042:
case 2481:
case 1152:
case 1381:
case 289:
case 1499:
case 1359:
case 2411:
case 742:
case 1495:
case 3809:
case 1355:
case 3380:
case 2108:
case 2763:
case 587:
case 2547:
case 700:
case 2289:
case 2989:
case 3520:
case 1532:
case 1521:
case 595:
case 1363:
case 3555:
case 1580:
case 1113:
case 2251:
case 766:
case 2463:
case 150:
case 2915:
case 1944:
case 1799:
case 2106:
case 571:
case 772:
case 3123:
case 1795:
case 2262:
case 3692:
case 2946:
case 2383:
case 2560:
case 2792:
case 2028:
case 106:
case 1212:
case 4073:
case 1610:
case 3611:
case 160:
case 1269:
case 930:
case 1265:
case 3856:
case 2817:
case 1306:
case 2163:
case 2708:
case 3739:
case 3231:
case 1621:
case 1680:
case 1282:
case 2406:
case 2535:
case 2539:
case 3423:
case 2647:
case 1930:
case 3577:
case 1404:
case 3620:
case 1230:
case 3222:
case 3894:
case 1771:
case 1820:
case 1275:
case 1881:
case 1641:
case 3443:
case 3102:
case 2570:
case 3942:
case 2696:
case 2627:
case 3242:
case 1855:
case 3309:
case 1859:
case 3966:
case 107:
case 4063:
case 2767:
case 448:
case 3567:
case 2048:
case 2899:
case 973:
case 965:
case 380:
case 2173:
case 658:
case 2654:
case 3534:
case 757:
case 68:
case 3007:
case 2554:
case 1892:
case 774:
case 3754:
case 1224:
case 3634:
case 411:
case 586:
case 880:
case 4006:
case 693:
case 2997:
case 3903:
case 1556:
case 3667:
case 3984:
case 1717:
case 215:
case 3203:
case 813:
case 623:
case 2272:
case 1957:
case 343:
case 2670:
case 2596:
case 418:
case 3498:
case 2972:
case 3727:
case 119:
case 3540:
case 1257:
case 3796:
case 2473:
case 1594:
case 1787:
case 1541:
case 2852:
case 2402:
case 2754:
case 2143:
case 928:
case 2007:
case 3093:
case 1286:
case 75:
case 3226:
case 1756:
case 2667:
case 133:
case 2903:
case 1517:
case 3926:
case 2078:
case 1398:
case 3861:
case 991:
case 1105:
case 3972:
case 2727:
case 2358:
case 3527:
case 1839:
case 3596:
case 3272:
case 845:
case 839:
case 1245:
case 1671:
case 1741:
case 2214:
case 1964:
case 2102:
case 1033:
case 1847:
case 1571:
case 2443:
case 2832:
case 582:
case 2966:
case 345:
case 2305:
case 2770:
case 2821:
case 2309:
case 2242:
case 2266:
case 1237:
case 3696:
case 3570:
case 2942:
case 1158:
case 3895:
case 280:
case 3899:
case 1536:
case 3048:
case 2198:
case 213:
case 625:
case 815:
case 687:
case 678:
case 3734:
case 788:
case 801:
case 3028:
case 1854:
case 2592:
case 1561:
case 3817:
case 1699:
case 1274:
case 1695:
case 762:
case 1896:
case 593:
case 3406:
case 1827:
case 3313:
case 989:
case 2655:
case 808:
case 2231:
case 2659:
case 2739:
case 3708:
case 3163:
case 776:
case 568:
case 584:
case 2577:
case 2841:
case 3777:
case 2922:
case 1552:
case 2520:
case 558:
case 2581:
case 102:
case 3547:
case 3720:
case 3285:
case 2608:
case 3251:
case 3759:
case 1870:
case 1229:
case 3755:
case 3635:
case 308:
case 1780:
case 1929:
case 2555:
case 2559:
case 799:
case 170:
case 3711:
case 2123:
case 1661:
case 3215:
case 3919:
case 3915:
case 1595:
case 2511:
case 3962:
case 3262:
case 3660:
case 1710:
case 1233:
case 1421:
case 1480:
case 3455:
case 1933:
case 3395:
case 2310:
case 2042:
case 3420:
case 2447:
case 2066:
case 1683:
case 637:
case 1410:
case 1347:
case 3763:
case 716:
case 1613:
case 2563:
case 140:
case 3411:
case 2805:
case 389:
case 4027:
case 908:
case 1339:
case 1335:
case 2907:
case 1086:
case 1121:
case 2663:
case 3293:
case 3155:
case 3026:
case 2978:
case 3120:
case 1132:
case 2147:
case 2278:
case 2084:
case 3492:
case 901:
case 124:
case 1360:
case 1583:
case 2435:
case 2506:
case 3361:
case 1049:
case 1898:
case 746:
case 1045:
case 183:
case 2723:
case 192:
case 255:
case 641:
case 363:
case 1050:
case 122:
case 375:
case 1156:
case 1025:
case 328:
case 2673:
case 2743:
case 3434:
case 747:
case 3019:
case 3200:
case 3900:
case 1901:
case 159:
case 1538:
case 2196:
case 1201:
case 1709:
case 458:
case 1370:
case 1705:
case 611:
case 821:
case 945:
case 939:
case 4039:
case 1327:
case 1456:
case 3928:
case 1396:
case 468:
case 891:
case 484:
case 3387:
case 2702:
case 493:
case 1288:
case 3643:
case 3883:
case 3134:
case 898:
case 3773:
case 1354:
case 3167:
case 2798:
case 353:
case 2356:
case 1823:
case 3598:
case 854:
case 3112:
case 917:
case 1070:
case 2390:
case 3362:
case 1176:
case 2425:
case 3071:
case 3315:
case 182:
case 3169:
case 2653:
case 2733:
case 3491:
case 4037:
case 1329:
case 3444:
case 739:
case 1548:
case 3130:
case 3389:
case 3800:
case 1350:
case 2322:
case 3412:
case 947:
case 2150:
case 4045:
case 3017:
case 2125:
case 1707:
case 2129:
case 881:
case 3828:
case 3913:
case 1593:
case 4016:
case 1054:
case 2474:
case 3753:
case 3633:
case 3144:
case 660:
case 1431:
case 2553:
case 3482:
case 2041:
case 1923:
case 504:
case 864:
case 888:
case 909:
case 877:
case 1422:
case 86:
case 4086:
case 3430:
case 3904:
case 2376:
case 354:
case 1190:
case 1027:
case 3283:
case 2080:
case 3475:
case 862:
case 1768:
case 352:
case 1047:
case 1466:
case 3157:
case 876:
case 2701:
case 2010:
case 2209:
case 570:
case 1628:
case 2342:
case 2905:
case 4029:
case 1337:
case 3938:
case 2909:
case 422:
case 1364:
case 492:
case 3099:
case 3848:
case 1600:
case 1349:
case 3175:
case 2164:
case 2807:
case 899:
case 1484:
case 1166:
case 931:
case 4074:
case 2416:
case 852:
case 3518:
case 1998:
case 3326:
case 123:
case 3052:
case 1035:
case 168:
case 184:
case 2445:
case 1039:
case 938:
case 1386:
case 1784:
case 3917:
case 1318:
case 1526:
case 3217:
case 1168:
case 40:
case 2524:
case 2876:
case 404:
case 3724:
case 3586:
case 838:
case 1023:
case 2941:
case 2994:
case 59:
case 2241:
case 3987:
case 3664:
case 52:
case 2418:
case 583:
case 2831:
case 1927:
case 696:
case 2557:
case 929:
case 3637:
case 2716:
case 3083:
case 999:
case 510:
case 2101:
case 816:
case 1766:
case 2737:
case 1742:
case 3537:
case 1301:
case 1825:
case 1468:
case 3885:
case 2764:
case 3775:
case 3889:
case 3649:
case 2188:
case 3564:
case 2890:
case 3686:
case 1697:
case 2368:
case 132:
case 846:
case 3819:
case 4033:
case 1619:
case 2133:
case 3261:
case 3961:
case 3826:
case 2565:
case 4018:
case 753:
case 2512:
case 1960:
case 988:
case 964:
case 809:
case 134:
case 977:
case 2058:
case 96:
case 3952:
case 1849:
case 244:
case 1098:
case 1689:
case 3252:
case 1722:
case 103:
case 3730:
case 24:
case 1845:
case 1731:
case 3629:
case 1235:
case 1939:
case 1816:
case 3393:
case 1935:
case 2307:
case 2433:
case 4001:
case 2980:
case 3529:
case 1043:
case 2921:
case 791:
case 2842:
case 2280:
case 1107:
case 721:
case 3348:
case 2232:
case 2630:
case 1864:
case 1178:
case 3550:
case 2009:
case 2612:
case 1546:
case 3038:
case 728:
case 309:
case 2005:
case 2910:
case 1562:
case 817:
case 95:
case 798:
case 2544:
case 685:
case 402:
case 1333:
case 2591:
case 1515:
case 2665:
case 3744:
case 3295:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746511201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,];
var gg_b = "1746511201/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
