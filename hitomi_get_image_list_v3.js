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
case 682:
case 3005:
case 2632:
case 3836:
case 1952:
case 233:
case 3814:
case 3891:
case 2315:
case 2411:
case 866:
case 2803:
case 3229:
case 977:
case 583:
case 2609:
case 1986:
case 88:
case 863:
case 1734:
case 1716:
case 624:
case 262:
case 2707:
case 1192:
case 2662:
case 3500:
case 74:
case 3849:
case 650:
case 3945:
case 142:
case 2792:
case 1082:
case 797:
case 1107:
case 2116:
case 2134:
case 2523:
case 2218:
case 2038:
case 1611:
case 1409:
case 3478:
case 1432:
case 3357:
case 2551:
case 1598:
case 244:
case 3947:
case 1543:
case 726:
case 3768:
case 2578:
case 723:
case 919:
case 3092:
case 2854:
case 442:
case 1818:
case 2317:
case 817:
case 599:
case 3007:
case 3594:
case 3698:
case 1306:
case 3931:
case 2172:
case 3156:
case 3258:
case 3961:
case 1342:
case 1203:
case 202:
case 3043:
case 2062:
case 2482:
case 1827:
case 803:
case 3344:
case 1350:
case 1751:
case 2456:
case 1592:
case 3605:
case 1723:
case 788:
case 2225:
case 1393:
case 3903:
case 2516:
case 314:
case 2123:
case 2534:
case 2784:
case 1958:
case 1261:
case 2991:
case 4000:
case 2151:
case 1198:
case 1296:
case 2949:
case 981:
case 2564:
case 1682:
case 1143:
case 2074:
case 2896:
case 438:
case 2373:
case 2359:
case 1505:
case 3464:
case 1000:
case 1348:
case 3084:
case 2276:
case 3383:
case 3252:
case 2861:
case 1778:
case 3732:
case 3111:
case 1825:
case 2847:
case 555:
case 3954:
case 1812:
case 1245:
case 3607:
case 2743:
case 3556:
case 968:
case 2766:
case 3807:
case 988:
case 1431:
case 1335:
case 1612:
case 1365:
case 2586:
case 3703:
case 2647:
case 1758:
case 1461:
case 2720:
case 2256:
case 3272:
case 3389:
case 2661:
case 3527:
case 2158:
case 841:
case 781:
case 2425:
case 2353:
case 2379:
case 1268:
case 3892:
case 2998:
case 1951:
case 2631:
case 1149:
case 3525:
case 4018:
case 1882:
case 1341:
case 2868:
case 759:
case 392:
case 2427:
case 1978:
case 2129:
case 3181:
case 3909:
case 3264:
case 768:
case 2304:
case 3805:
case 3014:
case 3091:
case 1729:
case 3452:
case 503:
case 521:
case 80:
case 1771:
case 2140:
case 3118:
case 3066:
case 899:
case 1681:
case 1232:
case 2152:
case 1025:
case 2992:
case 122:
case 777:
case 1012:
case 2186:
case 815:
case 2874:
case 3375:
case 1786:
case 1618:
case 734:
case 3127:
case 1514:
case 1591:
case 2558:
case 72:
case 1752:
case 1549:
case 1566:
case 2385:
case 1964:
case 2211:
case 2481:
case 2061:
case 3360:
case 3761:
case 719:
case 3458:
case 3620:
case 1403:
case 3125:
case 926:
case 1274:
case 2387:
case 579:
case 3112:
case 2529:
case 3796:
case 3330:
case 3731:
case 795:
case 3843:
case 282:
case 633:
case 3649:
case 743:
case 883:
case 532:
case 4012:
case 566:
case 422:
case 1888:
case 3747:
case 2603:
case 224:
case 563:
case 58:
case 708:
case 1972:
case 662:
case 484:
case 636:
case 3636:
case 746:
case 445:
case 3325:
case 800:
case 3421:
case 2039:
case 2244:
case 3453:
case 992:
case 3312:
case 2002:
case 2187:
case 361:
case 1787:
case 1917:
case 512:
case 613:
case 2608:
case 1075:
case 894:
case 4060:
case 1883:
case 127:
case 616:
case 772:
case 451:
case 3490:
case 3963:
case 493:
case 3848:
case 2352:
case 2801:
case 2283:
case 1915:
case 1785:
case 537:
case 1210:
case 427:
case 1060:
case 1565:
case 3273:
case 3259:
case 229:
case 2590:
case 2521:
case 3670:
case 3327:
case 714:
case 3739:
case 1224:
case 47:
case 2579:
case 3769:
case 2185:
case 574:
case 145:
case 3222:
case 3806:
case 2371:
case 1497:
case 2602:
case 301:
case 2767:
case 580:
case 2639:
case 1973:
case 2587:
case 2646:
case 3910:
case 860:
case 2948:
case 3381:
case 3842:
case 3485:
case 3215:
case 3530:
case 2737:
case 4013:
case 375:
case 2257:
case 653:
case 678:
case 2104:
case 2340:
case 2697:
case 1167:
case 411:
case 1402:
case 607:
case 1753:
case 1135:
case 2950:
case 3708:
case 2426:
case 1630:
case 3099:
case 720:
case 1320:
case 205:
case 1165:
case 3575:
case 1495:
case 754:
case 3901:
case 397:
case 2080:
case 3189:
case 2460:
case 1349:
case 2430:
case 2585:
case 3067:
case 2153:
case 3217:
case 1233:
case 940:
case 3487:
case 3388:
case 1239:
case 3050:
case 2159:
case 2173:
case 319:
case 1826:
case 3183:
case 2378:
case 2457:
case 698:
case 3724:
case 1019:
case 3980:
case 2001:
case 3394:
case 2895:
case 3311:
case 1877:
case 343:
case 3415:
case 1506:
case 3093:
case 1297:
case 1830:
case 2970:
case 409:
case 1542:
case 1773:
case 2275:
case 1150:
case 1728:
case 278:
case 291:
case 1875:
case 3417:
case 3287:
case 852:
case 920:
case 2793:
case 1083:
case 1295:
case 1463:
case 256:
case 3701:
case 377:
case 1921:
case 334:
case 2323:
case 2869:
case 3642:
case 1193:
case 1979:
case 2839:
case 2633:
case 3557:
case 4044:
case 2750:
case 3290:
case 359:
case 458:
case 1619:
case 3763:
case 473:
case 2559:
case 2742:
case 1305:
case 1717:
case 3733:
case 874:
case 1644:
case 3870:
case 2706:
case 1106:
case 2444:
case 1208:
case 3382:
case 3279:
case 837:
case 972:
case 469:
case 2117:
case 425:
case 1142:
case 1057:
case 3693:
case 19:
case 2601:
case 2419:
case 3356:
case 2289:
case 3221:
case 1424:
case 3969:
case 3946:
case 3544:
case 213:
case 1889:
case 169:
case 61:
case 3519:
case 1392:
case 3902:
case 2334:
case 3835:
case 3473:
case 3459:
case 2316:
case 249:
case 1722:
case 2033:
case 914:
case 3042:
case 1715:
case 1280:
case 2624:
case 2364:
case 3865:
case 3204:
case 3613:
case 3819:
case 2957:
case 2499:
case 606:
case 1746:
case 621:
case 738:
case 2441:
case 2197:
case 1667:
case 502:
case 1327:
case 1670:
case 3844:
case 2828:
case 3922:
case 2467:
case 931:
case 2087:
case 2470:
case 1797:
case 2775:
case 2139:
case 3030:
case 1259:
case 188:
case 3077:
case 2169:
case 3535:
case 1893:
case 810:
case 1404:
case 1376:
case 2437:
case 393:
case 1795:
case 2085:
case 1963:
case 1848:
case 3883:
case 2760:
case 3570:
case 327:
case 3567:
case 2621:
case 2777:
case 1228:
case 1513:
case 2679:
case 1933:
case 2859:
case 228:
case 2580:
case 1312:
case 3599:
case 161:
case 2726:
case 1130:
case 3408:
case 1421:
case 1325:
case 2195:
case 4035:
case 1067:
case 536:
case 426:
case 1217:
case 3366:
case 286:
case 2108:
case 1901:
case 3336:
case 2815:
case 3391:
case 197:
case 742:
case 4065:
case 1575:
case 533:
case 2242:
case 2539:
case 14:
case 3320:
case 1099:
case 3677:
case 3721:
case 2919:
case 3660:
case 984:
case 3630:
case 850:
case 3753:
case 2569:
case 311:
case 3779:
case 3167:
case 2079:
case 2053:
case 3170:
case 3402:
case 2354:
case 3439:
case 1318:
case 4041:
case 3675:
case 1924:
case 2180:
case 3469:
case 3137:
case 1113:
case 2685:
case 1215:
case 123:
case 1530:
case 215:
case 2713:
case 1065:
case 3199:
case 3704:
case 1910:
case 1780:
case 497:
case 2090:
case 3141:
case 2595:
case 3973:
case 3959:
case 4070:
case 3497:
case 1560:
case 1035:
case 4067:
case 4050:
case 3398:
case 3953:
case 318:
case 419:
case 2617:
case 134:
case 495:
case 2719:
case 217:
case 699:
case 2989:
case 3921:
case 3384:
case 2885:
case 1701:
case 3990:
case 4093:
case 3083:
case 443:
case 446:
case 3875:
case 1287:
case 3150:
case 844:
case 3773:
case 3542:
case 3759:
case 2028:
case 2563:
case 3297:
case 146:
case 108:
case 3657:
case 964:
case 1980:
case 2533:
case 1311:
case 550:
case 3904:
case 1710:
case 2110:
case 2309:
case 3246:
case 862:
case 1724:
case 836:
case 3019:
case 42:
case 1555:
case 686:
case 2615:
case 28:
case 263:
case 1183:
case 195:
case 119:
case 66:
case 683:
case 2622:
case 3826:
case 232:
case 3044:
case 358:
case 2448:
case 3985:
case 373:
case 3307:
case 2267:
case 1997:
case 3722:
case 257:
case 2501:
case 1006:
case 3593:
case 1835:
case 1473:
case 2975:
case 1459:
case 2853:
case 2879:
case 1519:
case 1902:
case 3550:
case 3424:
case 1946:
case 1969:
case 39:
case 1356:
case 1899:
case 1693:
case 1841:
case 2755:
case 168:
case 3106:
case 2450:
case 2628:
case 2368:
case 2926:
case 3208:
case 1428:
case 1650:
case 481:
case 3644:
case 2930:
case 1583:
case 206:
case 3548:
case 1155:
case 2022:
case 2510:
case 3987:
case 1763:
case 2265:
case 1995:
case 2804:
case 3813:
case 802:
case 2977:
case 2960:
case 3619:
case 3342:
case 3203:
case 2829:
case 2623:
case 364:
case 1156:
case 2214:
case 2291:
case 1698:
case 2034:
case 2266:
case 280:
case 2871:
case 2333:
case 420:
case 1007:
case 1182:
case 2840:
case 55:
case 1355:
case 856:
case 1451:
case 454:
case 1768:
case 2532:
case 878:
case 3772:
case 1738:
case 2756:
case 2220:
case 2562:
case 3105:
case 1423:
case 853:
case 1478:
case 505:
case 3432:
case 1357:
case 3611:
case 3694:
case 3409:
case 2443:
case 807:
case 4092:
case 3107:
case 4007:
case 1643:
case 909:
case 3192:
case 571:
case 1866:
case 1849:
case 1500:
case 1271:
case 3688:
case 1229:
case 2574:
case 1005:
case 2678:
case 2858:
case 1814:
case 727:
case 2538:
case 172:
case 2616:
case 2051:
case 2634:
case 1098:
case 3812:
case 849:
case 1709:
case 1111:
case 3825:
case 3778:
case 2568:
case 304:
case 414:
case 2132:
case 1252:
case 1383:
case 3000:
case 816:
case 1084:
case 51:
case 2109:
case 1434:
case 4:
case 694:
case 1188:
case 3143:
case 1692:
case 2407:
case 139:
case 867:
case 1774:
case 885:
case 976:
case 529:
case 635:
case 3198:
case 1:
case 3231:
case 4084:
case 958:
case 3507:
case 3958:
case 3876:
case 565:
case 3393:
case 1903:
case 114:
case 2078:
case 925:
case 1100:
case 3438:
case 3184:
case 3827:
case 3751:
case 969:
case 2174:
case 1234:
case 1486:
case 1118:
case 2561:
case 3627:
case 370:
case 3771:
case 2207:
case 2596:
case 1452:
case 3337:
case 1805:
case 2058:
case 829:
case 1909:
case 97:
case 3399:
case 3978:
case 235:
case 1962:
case 3445:
case 192:
case 637:
case 747:
case 1754:
case 887:
case 3882:
case 2988:
case 1892:
case 3268:
case 773:
case 3951:
case 2308:
case 3166:
case 4020:
case 1389:
case 776:
case 3191:
case 3136:
case 4036:
case 4014:
case 2900:
case 769:
case 3461:
case 3365:
case 2205:
case 3625:
case 331:
case 3335:
case 996:
case 3612:
case 4066:
case 725:
case 1576:
case 3496:
case 3972:
case 1938:
case 2956:
case 871:
case 2420:
case 1614:
case 2161:
case 1747:
case 2554:
case 3888:
case 1968:
case 1666:
case 2196:
case 1649:
case 1796:
case 1731:
case 2086:
case 440:
case 1112:
case 2395:
case 3894:
case 3811:
case 3403:
case 3076:
case 1125:
case 2052:
case 2147:
case 1761:
case 2284:
case 1377:
case 718:
case 2776:
case 3566:
case 1884:
case 1127:
case 3514:
case 3591:
case 2397:
case 652:
case 2640:
case 3934:
case 1440:
case 1898:
case 3520:
case 1745:
case 2727:
case 260:
case 830:
case 384:
case 2823:
case 2346:
case 1846:
case 1869:
case 1663:
case 2953:
case 1455:
case 1839:
case 1633:
case 3617:
case 3744:
case 1226:
case 1750:
case 1515:
case 1230:
case 540:
case 178:
case 2655:
case 191:
case 2875:
case 1793:
case 2083:
case 2463:
case 1965:
case 2295:
case 3442:
case 3885:
case 2384:
case 760:
case 1277:
case 156:
case 2990:
case 1522:
case 407:
case 107:
case 3124:
case 1748:
case 1001:
case 611:
case 3913:
case 2860:
case 2506:
case 2297:
case 478:
case 2830:
case 1970:
case 379:
case 2773:
case 2759:
case 1941:
case 2239:
case 2044:
case 366:
case 3622:
case 3362:
case 2826:
case 332:
case 2202:
case 1378:
case 2246:
case 2269:
case 4024:
case 794:
case 2593:
case 2307:
case 357:
case 3501:
case 67:
case 1483:
case 2985:
case 1213:
case 1063:
case 273:
case 2715:
case 258:
case 2410:
case 872:
case 937:
case 485:
case 2424:
case 1610:
case 3299:
case 700:
case 839:
case 467:
case 113:
case 2683:
case 974:
case 3757:
case 116:
case 627:
case 2055:
case 1808:
case 3241:
case 3659:
case 3673:
case 3628:
case 814:
case 2208:
case 651:
case 416:
case 696:
case 29:
case 1419:
case 3338:
case 185:
case 3977:
case 2619:
case 4063:
case 303:
case 1559:
case 1742:
case 3265:
case 2305:
case 2717:
case 912:
case 3022:
case 3235:
case 321:
case 2987:
case 3930:
case 2644:
case 1706:
case 735:
case 647:
case 3197:
case 3345:
case 2844:
case 4039:
case 30:
case 1579:
case 3604:
case 1553:
case 4069:
case 3508:
case 245:
case 994:
case 3957:
case 1801:
case 1352:
case 514:
case 3437:
case 2915:
case 1413:
case 2480:
case 892:
case 2210:
case 41:
case 3248:
case 2060:
case 3139:
case 5:
case 2565:
case 3828:
case 2922:
case 1590:
case 129:
case 3470:
case 900:
case 3679:
case 1097:
case 539:
case 341:
case 3873:
case 2917:
case 429:
case 328:
case 1608:
case 2537:
case 2075:
case 11:
case 227:
case 669:
case 2567:
case 2689:
case 3777:
case 3085:
case 1810:
case 3293:
case 487:
case 1942:
case 1824:
case 935:
case 3347:
case 2541:
case 1069:
case 1046:
case 1219:
case 712:
case 3690:
case 355:
case 1039:
case 3726:
case 673:
case 2408:
case 1244:
case 3955:
case 1002:
case 1765:
case 1993:
case 2263:
case 3303:
case 2336:
case 1358:
case 3815:
case 2391:
case 36:
case 1121:
case 1460:
case 3597:
case 3004:
case 3822:
case 2928:
case 2366:
case 386:
case 1585:
case 1153:
case 2233:
case 198:
case 3546:
case 960:
case 2779:
case 2135:
case 1426:
case 554:
case 3944:
case 1190:
case 105:
case 780:
case 405:
case 1257:
case 2469:
case 3021:
case 2855:
case 3354:
case 1008:
case 1741:
case 2675:
case 1340:
case 1697:
case 2170:
case 498:
case 399:
case 1371:
case 1767:
case 3595:
case 1833:
case 1475:
case 2959:
case 2199:
case 618:
case 1329:
case 3713:
case 1737:
case 3911:
case 3994:
case 3781:
case 2729:
case 3058:
case 3596:
case 1476:
case 2337:
case 2370:
case 270:
case 2771:
case 928:
case 3207:
case 941:
case 3154:
case 4054:
case 955:
case 2740:
case 1868:
case 1427:
case 2445:
case 1943:
case 1838:
case 2856:
case 3652:
case 2676:
case 721:
case 748:
case 757:
case 1720:
case 90:
case 2191:
case 1158:
case 690:
case 3103:
case 1425:
case 2923:
case 1353:
case 1412:
case 1998:
case 3308:
case 2018:
case 2149:
case 2166:
case 1696:
case 581:
case 1749:
case 2496:
case 604:
case 2431:
case 2612:
case 300:
case 3864:
case 1647:
case 1586:
case 4003:
case 2625:
case 2758:
case 1390:
case 3029:
case 1736:
case 1714:
case 2461:
case 3298:
case 1862:
case 3131:
case 1045:
case 897:
case 2888:
case 519:
case 1603:
case 3725:
case 124:
case 1832:
case 2972:
case 3878:
case 13:
case 3420:
case 3658:
case 642:
case 4061:
case 732:
case 150:
case 3284:
case 3414:
case 2811:
case 3395:
case 2403:
case 1905:
case 3052:
case 999:
case 3086:
case 763:
case 2934:
case 3640:
case 875:
case 2916:
case 2618:
case 1031:
case 2786:
case 1654:
case 1558:
case 1907:
case 2752:
case 3776:
case 2566:
case 96:
case 1211:
case 1481:
case 1061:
case 826:
case 3629:
case 43:
case 801:
case 284:
case 3346:
case 424:
case 1047:
case 3851:
case 3302:
case 3243:
case 222:
case 3671:
case 2012:
case 360:
case 3727:
case 823:
case 664:
case 1418:
case 436:
case 501:
case 82:
case 979:
case 462:
case 526:
case 834:
case 2306:
case 622:
case 3138:
case 3291:
case 3363:
case 433:
case 2203:
case 3623:
case 2105:
case 963:
case 575:
case 3756:
case 2543:
case 3220:
case 4038:
case 3562:
case 715:
case 4068:
case 3532:
case 1578:
case 1854:
case 3912:
case 3443:
case 242:
case 1792:
case 76:
case 783:
case 1116:
case 1068:
case 2254:
case 1488:
case 1218:
case 2056:
case 2694:
case 2611:
case 917:
case 3072:
case 1038:
case 2409:
case 3678:
case 2952:
case 3976:
case 1281:
case 1803:
case 3574:
case 2986:
case 2734:
case 2584:
case 1662:
case 3023:
case 3568:
case 204:
case 1847:
case 3616:
case 3051:
case 2812:
case 561:
case 2245:
case 402:
case 1572:
case 2143:
case 3162:
case 1074:
case 3407:
case 921:
case 2971:
case 1373:
case 2505:
case 2348:
case 3981:
case 3794:
case 3109:
case 1178:
case 1861:
case 3405:
case 1123:
case 2094:
case 2507:
case 2958:
case 3852:
case 1936:
case 3301:
case 2876:
case 1991:
case 1914:
case 337:
case 868:
case 1151:
case 588:
case 1966:
case 2296:
case 1328:
case 1949:
case 2231:
case 3886:
case 2682:
case 957:
case 70:
case 1212:
case 859:
case 1845:
case 2827:
case 1798:
case 2751:
case 2088:
case 1456:
case 670:
case 1920:
case 2592:
case 1009:
case 374:
case 3078:
case 2247:
case 3736:
case 3390:
case 1900:
case 3714:
case 987:
case 573:
case 3586:
case 2703:
case 965:
case 929:
case 1834:
case 1071:
case 3749:
case 2576:
case 3552:
case 713:
case 3998:
case 3631:
case 3696:
case 3054:
case 3282:
case 3379:
case 1103:
case 435:
case 2389:
case 3661:
case 1545:
case 749:
case 3129:
case 896:
case 2909:
case 59:
case 3838:
case 494:
case 1652:
case 6:
case 2962:
case 851:
case 292:
case 893:
case 1547:
case 614:
case 4040:
case 3140:
case 2234:
case 2118:
case 2066:
case 1154:
case 2049:
case 785:
case 1207:
case 1531:
case 2452:
case 3476:
case 2313:
case 1911:
case 2805:
case 2091:
case 1058:
case 4029:
case 547:
case 2036:
case 3288:
case 756:
case 1243:
case 1671:
case 160:
case 1727:
case 2745:
case 3047:
case 791:
case 3211:
case 3294:
case 3481:
case 3061:
case 2884:
case 2127:
case 971:
case 509:
case 3907:
case 240:
case 1640:
case 2796:
case 930:
case 2581:
case 3529:
case 654:
case 1395:
case 3905:
case 2360:
case 3571:
case 3200:
case 1284:
case 1436:
case 2620:
case 2377:
case 3832:
case 2938:
case 2636:
case 620:
case 1658:
case 1725:
case 2747:
case 1554:
case 3540:
case 324:
case 3809:
case 3045:
case 1982:
case 2968:
case 3862:
case 2326:
case 2843:
case 2251:
case 1131:
case 2649:
case 1196:
case 3707:
case 978:
case 2500:
case 3322:
case 336:
case 2271:
case 705:
case 480:
case 3411:
case 3494:
case 3281:
case 2229:
case 956:
case 1574:
case 3609:
case 3632:
case 1678:
case 333:
case 2814:
case 2891:
case 2478:
case 2357:
case 3551:
case 452:
case 771:
case 3116:
case 3134:
case 3068:
case 254:
case 2240:
case 3488:
case 1927:
case 2945:
case 1782:
case 3674:
case 2355:
case 1912:
case 1498:
case 1532:
case 730:
case 152:
case 2738:
case 1562:
case 640:
case 2423:
case 2947:
case 1829:
case 3705:
case 1623:
case 3172:
case 3400:
case 75:
case 1214:
case 1651:
case 1016:
case 1034:
case 1168:
case 180:
case 1249:
case 2931:
case 1333:
case 3317:
case 2182:
case 2007:
case 2605:
case 4023:
case 174:
case 1078:
case 913:
case 3032:
case 3225:
case 3456:
case 3009:
case 765:
case 3845:
case 302:
case 2043:
case 847:
case 1174:
case 3482:
case 949:
case 89:
case 2774:
case 3151:
case 3949:
case 3784:
case 1672:
case 1700:
case 3991:
case 3914:
case 1405:
case 214:
case 3123:
case 3534:
case 3178:
case 1132:
case 3861:
case 869:
case 1981:
case 1711:
case 1794:
case 1109:
case 527:
case 2286:
case 3359:
case 589:
case 3896:
case 1407:
case 239:
case 3831:
case 1492:
case 3227:
case 2762:
case 71:
case 272:
case 3743:
case 2607:
case 2556:
case 3572:
case 1616:
case 1788:
case 2098:
case 2954:
case 1918:
case 2709:
case 2194:
case 967:
case 1324:
case 3847:
case 876:
case 2732:
case 1023:
case 474:
case 1309:
case 3999:
case 2555:
case 417:
case 2183:
case 1332:
case 3457:
case 697:
case 1362:
case 2388:
case 3173:
case 4073:
case 1563:
case 73:
case 2422:
case 246:
case 64:
case 3970:
case 2285:
case 243:
case 2415:
case 1783:
case 2980:
case 3748:
case 1124:
case 3001:
case 1533:
case 2311:
case 2710:
case 3010:
case 3260:
case 2048:
case 2701:
case 3522:
case 2300:
case 933:
case 3965:
case 1442:
case 479:
case 962:
case 2417:
case 1406:
case 353:
case 4028:
case 1059:
case 3230:
case 2144:
case 3128:
case 864:
case 3351:
case 1617:
case 466:
case 522:
case 234:
case 3323:
case 3846:
case 2642:
case 48:
case 463:
case 626:
case 601:
case 2867:
case 2870:
case 3706:
case 106:
case 4017:
case 2733:
case 457:
case 2763:
case 3880:
case 103:
case 1015:
case 3573:
case 1265:
case 1960:
case 838:
case 3372:
case 2356:
case 2221:
case 3289:
case 1163:
case 2841:
case 2253:
case 2279:
case 1133:
case 1524:
case 1368:
case 3444:
case 1241:
case 1853:
case 2939:
case 1659:
case 316:
case 3122:
case 2544:
case 3115:
case 1757:
case 3610:
case 2946:
case 890:
case 1237:
case 3213:
case 1890:
case 2042:
case 2157:
case 3063:
case 421:
case 157:
case 1270:
case 531:
case 1975:
case 2835:
case 281:
case 804:
case 3316:
case 1955:
case 2453:
case 2479:
case 3002:
case 910:
case 3039:
case 155:
case 1250:
case 1726:
case 2177:
case 831:
case 40:
case 3219:
case 3489:
case 2160:
case 1347:
case 2325:
case 3824:
case 2795:
case 3810:
case 1085:
case 2963:
case 1293:
case 3942:
case 1760:
case 1361:
case 2490:
case 1777:
case 2228:
case 2513:
case 2126:
case 3097:
case 3504:
case 1653:
case 2933:
case 1435:
case 1580:
case 128:
case 1859:
case 428:
case 1828:
case 3590:
case 1467:
case 1102:
case 1470:
case 538:
case 1139:
case 3386:
case 2259:
case 1146:
case 2699:
case 1169:
case 668:
case 2404:
case 3283:
case 3801:
case 387:
case 1437:
case 365:
case 2637:
case 1508:
case 3579:
case 1604:
case 2769:
case 3553:
case 1441:
case 455:
case 2739:
case 1197:
case 2667:
case 3521:
case 2702:
case 659:
case 1983:
case 2215:
case 564:
case 223:
case 2530:
case 115:
case 1713:
case 3669:
case 822:
case 3646:
case 2910:
case 4004:
case 2780:
case 483:
case 3863:
case 3329:
case 1090:
case 3639:
case 1817:
case 3475:
case 486:
case 62:
case 2806:
case 2560:
case 3602:
case 201:
case 884:
case 3767:
case 1079:
case 677:
case 3008:
case 3104:
case 93:
case 3799:
case 1685:
case 275:
case 3257:
case 1539:
case 1502:
case 4021:
case 1919:
case 608:
case 733:
case 2041:
case 3255:
case 1569:
case 1687:
case 1546:
case 4079:
case 542:
case 3153:
case 2070:
case 1822:
case 1206:
case 186:
case 1108:
case 695:
case 3585:
case 3358:
case 4090:
case 2901:
case 16:
case 297:
case 3080:
case 619:
case 3460:
case 3765:
case 415:
case 1303:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744430401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,];
var gg_b = "1744430401/";

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
