// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
var o = 1;
switch (g) {
case 1642:
case 1187:
case 67:
case 1797:
case 3597:
case 635:
case 2763:
case 3274:
case 2758:
case 291:
case 2048:
case 3735:
case 216:
case 3969:
case 1518:
case 314:
case 1616:
case 187:
case 1534:
case 1523:
case 301:
case 1491:
case 814:
case 2743:
case 1941:
case 825:
case 2578:
case 3469:
case 4000:
case 2524:
case 3649:
case 1389:
case 3588:
case 514:
case 1441:
case 9:
case 3570:
case 2111:
case 2615:
case 1197:
case 3678:
case 4076:
case 3431:
case 394:
case 3281:
case 746:
case 3875:
case 1707:
case 427:
case 2258:
case 1041:
case 401:
case 2049:
case 1436:
case 3986:
case 2370:
case 3651:
case 520:
case 193:
case 557:
case 2565:
case 1269:
case 962:
case 2317:
case 2083:
case 2340:
case 568:
case 1347:
case 1206:
case 1987:
case 361:
case 940:
case 3330:
case 430:
case 4027:
case 2592:
case 1174:
case 1158:
case 1106:
case 447:
case 1865:
case 3041:
case 3364:
case 3738:
case 3884:
case 2310:
case 2951:
case 224:
case 2915:
case 3824:
case 1696:
case 2819:
case 1478:
case 3097:
case 692:
case 3059:
case 3753:
case 1090:
case 3302:
case 650:
case 1219:
case 3917:
case 1079:
case 2801:
case 2020:
case 2476:
case 3784:
case 1569:
case 3525:
case 770:
case 2602:
case 278:
case 541:
case 1487:
case 1024:
case 1208:
case 3727:
case 4073:
case 981:
case 99:
case 936:
case 3363:
case 3188:
case 2979:
case 389:
case 2642:
case 1982:
case 1975:
case 2876:
case 2549:
case 3981:
case 1813:
case 1278:
case 1535:
case 2513:
case 457:
case 1018:
case 1970:
case 2345:
case 922:
case 3265:
case 1990:
case 1687:
case 738:
case 897:
case 1177:
case 1114:
case 3958:
case 1799:
case 1032:
case 2268:
case 1199:
case 1510:
case 2569:
case 2778:
case 1779:
case 2996:
case 1437:
case 3132:
case 129:
case 355:
case 1503:
case 779:
case 3933:
case 702:
case 3015:
case 2336:
case 1849:
case 1156:
case 358:
case 2727:
case 858:
case 2187:
case 198:
case 2586:
case 244:
case 3156:
case 1585:
case 2395:
case 1559:
case 3289:
case 2023:
case 1969:
case 3435:
case 3314:
case 3205:
case 1132:
case 633:
case 1481:
case 2098:
case 3197:
case 362:
case 3500:
case 652:
case 3560:
case 1272:
case 1527:
case 718:
case 32:
case 3582:
case 4006:
case 1250:
case 1099:
case 1515:
case 2740:
case 501:
case 2728:
case 171:
case 1415:
case 2574:
case 1479:
case 2188:
case 2850:
case 596:
case 2069:
case 1035:
case 475:
case 3305:
case 528:
case 1775:
case 634:
case 2912:
case 2205:
case 2475:
case 2378:
case 2687:
case 3249:
case 853:
case 3814:
case 1164:
case 1768:
case 2179:
case 4044:
case 2722:
case 1077:
case 2178:
case 851:
case 3579:
case 992:
case 1245:
case 1294:
case 2928:
case 628:
case 312:
case 2781:
case 70:
case 932:
case 1357:
case 3577:
case 3404:
case 711:
case 3987:
case 1053:
case 2739:
case 776:
case 168:
case 2796:
case 3532:
case 3511:
case 820:
case 3496:
case 3371:
case 1537:
case 2084:
case 2584:
case 488:
case 833:
case 2071:
case 265:
case 3611:
case 150:
case 958:
case 2198:
case 3528:
case 3619:
case 1350:
case 2933:
case 3913:
case 909:
case 894:
case 2175:
case 27:
case 3605:
case 2076:
case 3117:
case 1293:
case 3961:
case 3087:
case 697:
case 196:
case 3612:
case 2593:
case 456:
case 2845:
case 1974:
case 3451:
case 2847:
case 2676:
case 892:
case 371:
case 2648:
case 3991:
case 2140:
case 2197:
case 1161:
case 2358:
case 1002:
case 1689:
case 2273:
case 2953:
case 679:
case 3395:
case 1447:
case 163:
case 1899:
case 1891:
case 2668:
case 423:
case 3881:
case 1404:
case 742:
case 1634:
case 2331:
case 131:
case 1702:
case 1551:
case 367:
case 2222:
case 912:
case 3805:
case 1000:
case 758:
case 1918:
case 2924:
case 2325:
case 3669:
case 874:
case 2380:
case 1771:
case 2301:
case 2898:
case 1104:
case 3673:
case 192:
case 2828:
case 769:
case 3581:
case 3058:
case 176:
case 2629:
case 2665:
case 3222:
case 2765:
case 6:
case 2007:
case 3239:
case 3902:
case 1501:
case 254:
case 3591:
case 3193:
case 1280:
case 2161:
case 1774:
case 2896:
case 3402:
case 232:
case 3702:
case 236:
case 518:
case 3963:
case 1440:
case 2738:
case 1022:
case 3776:
case 1203:
case 2250:
case 86:
case 725:
case 610:
case 2590:
case 3688:
case 2145:
case 3346:
case 227:
case 3711:
case 2960:
case 4056:
case 41:
case 2481:
case 1869:
case 2867:
case 2461:
case 880:
case 3948:
case 2463:
case 1292:
case 3255:
case 1236:
case 139:
case 2991:
case 559:
case 2322:
case 2167:
case 3888:
case 1755:
case 1900:
case 1824:
case 1406:
case 1456:
case 284:
case 2431:
case 826:
case 1563:
case 2024:
case 153:
case 2190:
case 3208:
case 829:
case 831:
case 2530:
case 3396:
case 2125:
case 2793:
case 929:
case 1489:
case 3815:
case 926:
case 281:
case 1586:
case 2311:
case 643:
case 4014:
case 3245:
case 79:
case 2655:
case 2374:
case 2350:
case 3038:
case 1876:
case 3103:
case 2555:
case 111:
case 1739:
case 3444:
case 2935:
case 4026:
case 2608:
case 201:
case 42:
case 945:
case 1949:
case 44:
case 1088:
case 368:
case 550:
case 1811:
case 799:
case 2816:
case 960:
case 2199:
case 3252:
case 2533:
case 793:
case 2088:
case 3699:
case 1593:
case 3976:
case 1604:
case 1093:
case 837:
case 3046:
case 1131:
case 1521:
case 3799:
case 45:
case 3836:
case 93:
case 2382:
case 3514:
case 1822:
case 3859:
case 1052:
case 2185:
case 2189:
case 1621:
case 1668:
case 577:
case 3348:
case 1804:
case 2438:
case 1785:
case 2270:
case 1299:
case 392:
case 3828:
case 1338:
case 2400:
case 1231:
case 1549:
case 980:
case 2754:
case 1381:
case 3607:
case 1425:
case 2558:
case 398:
case 116:
case 2434:
case 1543:
case 2054:
case 3202:
case 117:
case 3051:
case 1866:
case 923:
case 30:
case 3065:
case 862:
case 836:
case 2926:
case 3563:
case 925:
case 3508:
case 1528:
case 478:
case 3807:
case 1966:
case 12:
case 622:
case 908:
case 3043:
case 687:
case 81:
case 818:
case 3493:
case 3854:
case 1620:
case 17:
case 1014:
case 2192:
case 2110:
case 2514:
case 35:
case 4079:
case 665:
case 3614:
case 1878:
case 2305:
case 1602:
case 2961:
case 256:
case 1967:
case 1905:
case 1871:
case 3111:
case 3460:
case 2464:
case 3695:
case 287:
case 3737:
case 3609:
case 1946:
case 3586:
case 3671:
case 1939:
case 4051:
case 2053:
case 330:
case 297:
case 1694:
case 2715:
case 2685:
case 1997:
case 3944:
case 1462:
case 2488:
case 1897:
case 804:
case 3659:
case 194:
case 2826:
case 3393:
case 2034:
case 3766:
case 937:
case 4082:
case 3554:
case 3749:
case 3555:
case 656:
case 4074:
case 1889:
case 2909:
case 3438:
case 3116:
case 2962:
case 3254:
case 3636:
case 905:
case 2211:
case 1872:
case 2797:
case 1909:
case 551:
case 2427:
case 1838:
case 24:
case 1466:
case 1204:
case 2123:
case 1989:
case 582:
case 569:
case 3212:
case 3002:
case 1445:
case 801:
case 720:
case 74:
case 696:
case 418:
case 2244:
case 731:
case 3154:
case 3931:
case 1495:
case 599:
case 2779:
case 1070:
case 2213:
case 2678:
case 2535:
case 1301:
case 2846:
case 2958:
case 2606:
case 3122:
case 2577:
case 1304:
case 3826:
case 3148:
case 104:
case 3999:
case 59:
case 1823:
case 3938:
case 1947:
case 3534:
case 968:
case 1894:
case 637:
case 2421:
case 1676:
case 1544:
case 2563:
case 343:
case 1376:
case 1577:
case 1615:
case 1185:
case 2670:
case 2619:
case 2009:
case 1968:
case 3882:
case 2219:
case 4086:
case 2711:
case 1087:
case 3257:
case 1637:
case 2649:
case 220:
case 2236:
case 1572:
case 3462:
case 4012:
case 3434:
case 3681:
case 3763:
case 341:
case 755:
case 3201:
case 483:
case 3455:
case 2113:
case 3037:
case 2282:
case 3887:
case 1810:
case 261:
case 560:
case 1938:
case 3947:
case 3684:
case 3621:
case 2443:
case 1748:
case 2631:
case 800:
case 2551:
case 1807:
case 2478:
case 3130:
case 1051:
case 1789:
case 3332:
case 2786:
case 2394:
case 38:
case 1387:
case 151:
case 1706:
case 3150:
case 1815:
case 1386:
case 2491:
case 517:
case 2355:
case 1020:
case 200:
case 2347:
case 1298:
case 2925:
case 1649:
case 976:
case 1122:
case 3650:
case 3356:
case 2100:
case 2691:
case 2265:
case 3153:
case 164:
case 4020:
case 1498:
case 2697:
case 2393:
case 2212:
case 3953:
case 3243:
case 2840:
case 989:
case 828:
case 58:
case 2323:
case 1658:
case 1165:
case 864:
case 4062:
case 3210:
case 1680:
case 1646:
case 3420:
case 450:
case 2520:
case 3179:
case 3860:
case 1509:
case 4078:
case 3294:
case 2762:
case 1116:
case 3279:
case 2063:
case 3186:
case 3778:
case 2519:
case 3023:
case 1095:
case 2092:
case 3448:
case 1499:
case 3129:
case 1964:
case 425:
case 3021:
case 2207:
case 1560:
case 3048:
case 2504:
case 1472:
case 2396:
case 4058:
case 1720:
case 2910:
case 2233:
case 3680:
case 403:
case 1371:
case 421:
case 606:
case 2390:
case 2078:
case 255:
case 2773:
case 2742:
case 1379:
case 3946:
case 3131:
case 2969:
case 2363:
case 510:
case 3523:
case 2136:
case 1758:
case 3628:
case 2810:
case 3852:
case 1362:
case 3102:
case 3971:
case 1418:
case 209:
case 2620:
case 703:
case 1340:
case 4036:
case 1980:
case 1064:
case 531:
case 1115:
case 3463:
case 130:
case 3224:
case 2126:
case 1307:
case 1568:
case 3698:
case 66:
case 3413:
case 3022:
case 2975:
case 2044:
case 3182:
case 2487:
case 380:
case 3025:
case 3215:
case 1693:
case 2385:
case 706:
case 3895:
case 185:
case 602:
case 1314:
case 2658:
case 142:
case 1812:
case 2747:
case 3337:
case 1055:
case 1960:
case 533:
case 4085:
case 1695:
case 461:
case 3308:
case 1908:
case 2505:
case 3240:
case 4028:
case 3756:
case 2102:
case 1334:
case 2523:
case 1256:
case 1827:
case 165:
case 2997:
case 2499:
case 3070:
case 2808:
case 2320:
case 2946:
case 2802:
case 1284:
case 65:
case 3100:
case 2680:
case 440:
case 1150:
case 1692:
case 1101:
case 1063:
case 3133:
case 1538:
case 2539:
case 416:
case 2371:
case 556:
case 2457:
case 1316:
case 3220:
case 453:
case 3167:
case 2588:
case 2226:
case 3029:
case 2008:
case 3474:
case 1548:
case 3843:
case 1844:
case 2151:
case 3758:
case 2866:
case 1666:
case 3491:
case 580:
case 1089:
case 4055:
case 3074:
case 3833:
case 1006:
case 3665:
case 2240:
case 1798:
case 2994:
case 25:
case 2094:
case 970:
case 2784:
case 3647:
case 3482:
case 2028:
case 3983:
case 996:
case 57:
case 1313:
case 2417:
case 1202:
case 1612:
case 3175:
case 1592:
case 1526:
case 1555:
case 2386:
case 2887:
case 77:
case 2902:
case 4035:
case 225:
case 2760:
case 2149:
case 1608:
case 3358:
case 1056:
case 2597:
case 2379:
case 3426:
case 978:
case 3889:
case 1751:
case 819:
case 2420:
case 2852:
case 3951:
case 1723:
case 2734:
case 353:
case 3533:
case 2436:
case 2707:
case 3449:
case 3531:
case 2566:
case 2259:
case 390:
case 1601:
case 1391:
case 3831:
case 2319:
case 3639:
case 2838:
case 3344:
case 868:
case 3368:
case 3035:
case 1337:
case 98:
case 3906:
case 1558:
case 1384:
case 2803:
case 3001:
case 716:
case 1395:
case 2307:
case 55:
case 2993:
case 822:
case 3253:
case 115:
case 1839:
case 26:
case 3863:
case 175:
case 816:
case 1182:
case 1062:
case 1547:
case 1270:
case 1039:
case 3935:
case 3105:
case 1994:
case 620:
case 2091:
case 648:
case 991:
case 961:
case 3141:
case 2813:
case 965:
case 118:
case 1703:
case 1400:
case 383:
case 3456:
case 2112:
case 590:
case 3055:
case 280:
case 3099:
case 3646:
case 1525:
case 3716:
case 127:
case 4068:
case 3060:
case 930:
case 2300:
case 3862:
case 723:
case 3929:
case 1216:
case 3966:
case 1282:
case 899:
case 315:
case 3298:
case 1734:
case 495:
case 1008:
case 3594:
case 2772:
case 121:
case 3280:
case 3578:
case 2633:
case 454:
case 1221:
case 214:
case 477:
case 2484:
case 3696:
case 810:
case 595:
case 539:
case 1780:
case 4039:
case 1426:
case 1906:
case 2628:
case 3760:
case 2000:
case 987:
case 3640:
case 2675:
case 458:
case 3655:
case 132:
case 2963:
case 3631:
case 2332:
case 532:
case 2674:
case 942:
case 2503:
case 1439:
case 3284:
case 3004:
case 1059:
case 2731:
case 1403:
case 2051:
case 2689:
case 95:
case 2490:
case 3810:
case 3450:
case 2663:
case 3706:
case 3272:
case 3447:
case 3373:
case 2304:
case 2096:
case 2326:
case 1194:
case 2636:
case 794:
case 3593:
case 613:
case 2596:
case 2699:
case 4009:
case 1354:
case 530:
case 237:
case 2269:
case 3303:
case 1463:
case 407:
case 3622:
case 3553:
case 3675:
case 1565:
case 388:
case 4065:
case 360:
case 3414:
case 2285:
case 3377:
case 1275:
case 3708:
case 1732:
case 494:
case 2906:
case 3428:
case 1688:
case 3301:
case 2262:
case 3079:
case 263:
case 601:
case 325:
case 431:
case 1752:
case 1781:
case 2276:
case 500:
case 1898:
case 2886:
case 3878:
case 487:
case 76:
case 1274:
case 295:
case 3206:
case 885:
case 2713:
case 704:
case 3283:
case 2373:
case 3773:
case 2725:
case 435:
case 2625:
case 3124:
case 1277:
case 2341:
case 3648:
case 1171:
case 2065:
case 3959:
case 113:
case 1228:
case 1663:
case 1854:
case 3237:
case 433:
case 3580:
case 3291:
case 2548:
case 3794:
case 1424:
case 891:
case 664:
case 3003:
case 3192:
case 3922:
case 642:
case 1352:
case 3290:
case 2407:
case 3518:
case 1933:
case 2433:
case 3566:
case 2623:
case 3998:
case 2798:
case 1220:
case 3125:
case 705:
case 1864:
case 3945:
case 1736:
case 1985:
case 998:
case 223:
case 3943:
case 1657:
case 2153:
case 988:
case 583:
case 3516:
case 2001:
case 31:
case 2364:
case 2025:
case 271:
case 1365:
case 3772:
case 1881:
case 266:
case 863:
case 947:
case 3767:
case 2413:
case 3957:
case 202:
case 3107:
case 2391:
case 1251:
case 23:
case 2052:
case 561:
case 1610:
case 2220:
case 442:
case 409:
case 1742:
case 3587:
case 1728:
case 744:
case 2333:
case 2486:
case 1148:
case 2545:
case 3838:
case 182:
case 1931:
case 2324:
case 3162:
case 1367:
case 144:
case 2315:
case 1200:
case 990:
case 570:
case 2972:
case 545:
case 1579:
case 379:
case 2827:
case 618:
case 3694:
case 48:
case 2820:
case 3446:
case 3685:
case 2119:
case 186:
case 3408:
case 329:
case 2261:
case 3638:
case 2062:
case 1015:
case 1342:
case 3517:
case 3217:
case 663:
case 408:
case 2451:
case 2824:
case 1414:
case 3113:
case 326:
case 2163:
case 1410:
case 2248:
case 2392:
case 2587:
case 2815:
case 1154:
case 666:
case 4046:
case 2730:
case 147:
case 2921:
case 2271:
case 1625:
case 247:
case 2529:
case 1581:
case 1443:
case 3062:
case 3464:
case 2115:
case 2218:
case 3234:
case 2528:
case 2316:
case 2467:
case 229:
case 2585:
case 1373:
case 1714:
case 298:
case 644:
case 3036:
case 122:
case 1378:
case 3033:
case 126:
case 308:
case 3437:
case 2995:
case 1529:
case 3054:
case 1943:
case 2003:
case 1319:
case 3589:
case 3207:
case 2460:
case 2208:
case 1408:
case 2881:
case 751:
case 2871:
case 739:
case 1222:
case 64:
case 3067:
case 373:
case 1754:
case 2686:
case 3085:
case 1082:
case 221:
case 3752:
case 1952:
case 3544:
case 3442:
case 2550:
case 3504:
case 2183:
case 4072:
case 896:
case 2470:
case 3744:
case 238:
case 1741:
case 1264:
case 2469:
case 105:
case 2894:
case 228:
case 2746:
case 3795:
case 1289:
case 1172:
case 3127:
case 3880:
case 2605:
case 0:
case 971:
case 3661:
case 1912:
case 2903:
case 2616:
case 321:
case 2482:
case 2097:
case 1320:
case 1317:
case 1198:
case 3144:
case 1333:
case 3468:
case 584:
case 2789:
case 3542:
case 4071:
case 2288:
case 2837:
case 873:
case 741:
case 3383:
case 927:
case 1857:
case 1605:
case 2544:
case 3390:
case 1840:
case 3034:
case 2314:
case 1978:
case 1665:
case 2029:
case 1835:
case 1268:
case 2990:
case 3596:
case 1888:
case 1459:
case 2124:
case 1361:
case 733:
case 2640:
case 1875:
case 37:
case 2171:
case 1021:
case 2998:
case 3798:
case 504:
case 1808:
case 1944:
case 3739:
case 3372:
case 3143:
case 589:
case 2507:
case 1675:
case 1587:
case 3171:
case 212:
case 1937:
case 40:
case 2878:
case 2095:
case 3258:
case 3703:
case 2749:
case 3068:
case 2525:
case 2471:
case 2968:
case 1475:
case 3615:
case 2989:
case 2312:
case 2442:
case 812:
case 4011:
case 3064:
case 2955:
case 4023:
case 1930:
case 345:
case 3569:
case 752:
case 2182:
case 579:
case 3300:
case 1176:
case 1910:
case 2692:
case 320:
case 1033:
case 3331:
case 3108:
case 2238:
case 3385:
case 2485:
case 125:
case 2531:
case 2938:
case 906:
case 3140:
case 3334:
case 463:
case 3320:
case 624:
case 1743:
case 2418:
case 2372:
case 3771:
case 856:
case 1235:
case 51:
case 883:
case 1644:
case 2410:
case 3765:
case 1756:
case 429:
case 955:
case 790:
case 721:
case 3256:
case 2279:
case 781:
case 1858:
case 2624:
case 4091:
case 1500:
case 2552:
case 4034:
case 3057:
case 1201:
case 3351:
case 3849:
case 3335:
case 3558:
case 1873:
case 1375:
case 269:
case 1134:
case 199:
case 1718:
case 2077:
case 267:
case 3397:
case 1370:
case 2303:
case 1973:
case 158:
case 3264:
case 2666:
case 231:
case 2884:
case 3624:
case 114:
case 726:
case 707:
case 2839:
case 327:
case 3546:
case 1956:
case 503:
case 3369:
case 3565:
case 3470:
case 558:
case 157:
case 3422:
case 2913:
case 3912:
case 1157:
case 1640:
case 3353:
case 1449:
case 2936:
case 1427:
case 1519:
case 2365:
case 2723:
case 2174:
case 2976:
case 1765:
case 838:
case 1050:
case 1243:
case 2415:
case 1651:
case 2254:
case 1396:
case 1348:
case 1324:
case 2556:
case 322:
case 999:
case 1764:
case 3416:
case 497:
case 2639:
case 2669:
case 3214:
case 542:
case 3632:
case 3380:
case 1096:
case 3176:
case 2617:
case 975:
case 2516:
case 1805:
case 507:
case 824:
case 2169:
case 107:
case 1617:
case 1532:
case 3236:
case 3172:
case 3287:
case 2033:
case 2977:
case 1972:
case 3530:
case 3861:
case 1140:
case 1533:
case 2644:
case 3743:
case 3701:
case 384:
case 928:
case 1624:
case 3526:
case 1963:
case 1473:
case 1650:
case 817:
case 1409:
case 1218:
case 636:
case 3643:
case 3741:
case 3339:
case 2152:
case 1953:
case 2988:
case 3816:
case 3194:
case 3572:
case 1761:
case 2502:
case 469:
case 378:
case 3700:
case 1126:
case 2927:
case 1223:
case 1647:
case 102:
case 2403:
case 1458:
case 2914:
case 365:
case 2231:
case 2645:
case 3120:
case 765:
case 2862:
case 4093:
case 3629:
case 16:
case 3623:
case 778:
case 3238:
case 547:
case 3839:
case 782:
case 4008:
case 3865:
case 2352:
case 3834:
case 3098:
case 1399:
case 1851:
case 1111:
case 803:
case 1507:
case 2954:
case 1652:
case 2046:
case 690:
case 3137:
case 4001:
case 3840:
case 2067:
case 1907:
case 879:
case 963:
case 972:
case 506:
case 3782:
case 3800:
case 262:
case 226:
case 460:
case 659:
case 4066:
case 1460:
case 3080:
case 2036:
case 3520:
case 2058:
case 995:
case 1923:
case 2275:
case 3896:
case 92:
case 780:
case 3584:
case 1464:
case 2242:
case 1636:
case 2229:
case 258:
case 3326:
case 50:
case 2632:
case 3072:
case 2045:
case 2880:
case 303:
case 1995:
case 1450:
case 2165:
case 357:
case 2842:
case 1662:
case 3114:
case 3191:
case 728:
case 3362:
case 3914:
case 1153:
case 3316:
case 2800:
case 646:
case 3248:
case 2777:
case 698:
case 3604:
case 1160:
case 2895:
case 1044:
case 1325:
case 100:
case 1178:
case 3808:
case 188:
case 2455:
case 1364:
case 3094:
case 3994:
case 1816:
case 548:
case 1485:
case 2601:
case 3417:
case 683:
case 2892:
case 1488:
case 2329:
case 2245:
case 2943:
case 2292:
case 1380:
case 526:
case 382:
case 2714:
case 2683:
case 2650:
case 21:
case 1452:
case 282:
case 651:
case 1716:
case 2893:
case 336:
case 2751:
case 2611:
case 2018:
case 3723:
case 234:
case 2118:
case 3657:
case 3081:
case 1455:
case 72:
case 2527:
case 1735:
case 2999:
case 3689:
case 747:
case 1438:
case 3161:
case 2579:
case 524:
case 2721:
case 3897:
case 2693:
case 4081:
case 3512:
case 167:
case 1731:
case 682:
case 3941:
case 2700:
case 3231:
case 1067:
case 623:
case 1001:
case 797:
case 1603:
case 1514:
case 1181:
case 3322:
case 2630:
case 669:
case 169:
case 3263:
case 1392:
case 1385:
case 3045:
case 3170:
case 2289:
case 2:
case 1924:
case 684:
case 1730:
case 3481:
case 4010:
case 1762:
case 3506:
case 2656:
case 544:
case 2309:
case 468:
case 1028:
case 2621:
case 338:
case 3365:
case 3221:
case 2359:
case 1213:
case 1834:
case 8:
case 1766:
case 1607:
case 1048:
case 490:
case 89:
case 174:
case 4002:
case 2383:
case 2522:
case 3092:
case 472:
case 3310:
case 2787:
case 3269:
case 1613:
case 3967:
case 1196:
case 918:
case 2206:
case 4088:
case 585:
case 3260:
case 1493:
case 2346:
case 2290:
case 612:
case 3204:
case 3273:
case 1659:
case 3173:
case 1469:
case 1915:
case 3374:
case 15:
case 1257:
case 3687:
case 2399:
case 1211:
case 3936:
case 997:
case 3937:
case 3867:
case 3538:
case 3652:
case 3965:
case 3910:
case 1539:
case 3285:
case 1679:
case 1524:
case 1520:
case 393:
case 737:
case 3806:
case 2015:
case 2295:
case 1991:
case 1855:
case 3394:
case 3288:
case 1448:
case 2540:
case 2131:
case 3720:
case 3992:
case 1074:
case 4080:
case 3128:
case 3247:
case 3928:
case 173:
case 3006:
case 2709:
case 608:
case 1004:
case 2330:
case 3710:
case 2416:
case 2105:
case 949:
case 18:
case 861:
case 2901:
case 3940:
case 3439:
case 399:
case 1237:
case 1080:
case 56:
case 2099:
case 3088:
case 1248:
case 292:
case 2571:
case 3452:
case 63:
case 332:
case 1013:
case 2021:
case 886:
case 2243:
case 4003:
case 658:
case 73:
case 3461:
case 3877:
case 759:
case 3340:
case 2351:
case 2090:
case 709:
case 492:
case 3230:
case 760:
case 1863:
case 900:
case 3327:
case 3813:
case 3893:
case 3618:
case 462:
case 1719:
case 1803:
case 3764:
case 2002:
case 2138:
case 2818:
case 1653:
case 2769:
case 1016:
case 713:
case 2353:
case 1541:
case 2235:
case 377:
case 626:
case 938:
case 3345:
case 1826:
case 3613:
case 538:
case 974:
case 2595:
case 2679:
case 1240:
case 3515:
case 1351:
case 910:
case 1081:
case 2745:
case 3539:
case 2412:
case 3573:
case 849:
case 177:
case 1295:
case 593:
case 493:
case 3848:
case 2064:
case 3802:
case 3139:
case 3391:
case 1075:
case 798:
case 3027:
case 3400:
case 2599:
case 1297:
case 1155:
case 2274:
case 2934:
case 428:
case 2861:
case 250:
case 1394:
case 3466:
case 1121:
case 3199:
case 1704:
case 563:
case 1860:
case 1926:
case 3885:
case 2186:
case 3844:
case 1841:
case 1327:
case 3777:
case 1147:
case 598:
case 3787:
case 1886:
case 2966:
case 3465:
case 1672:
case 3031:
case 2501:
case 1113:
case 4087:
case 730:
case 1733:
case 149:
case 2726:
case 2428:
case 3387:
case 2128:
case 2005:
case 3011:
case 3683:
case 1948:
case 3745:
case 3790:
case 2573:
case 3235:
case 581:
case 3901:
case 2252:
case 3177:
case 2150:
case 1296:
case 2570:
case 3616:
case 3736:
case 2671:
case 859:
case 3792:
case 3184:
case 3510:
case 1145:
case 523:
case 3781:
case 3123:
case 2559:
case 2079:
case 2532:
case 3600:
case 3670:
case 1686:
case 179:
case 2448:
case 1318:
case 1225:
case 489:
case 1017:
case 3503:
case 1801:
case 811:
case 2974:
case 2768:
case 3276:
case 2257:
case 1230:
case 1232:
case 52:
case 1664:
case 3507:
case 3821:
case 1830:
case 2735:
case 1311:
case 4063:
case 3718:
case 3599:
case 1583:
case 536:
case 2971:
case 754:
case 3908:
case 3013:
case 3856:
case 13:
case 2348:
case 823:
case 1782:
case 2444:
case 62:
case 2509:
case 3874:
case 3398:
case 2907:
case 2759:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1657994402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,];
var gg_b = "1657994402/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
