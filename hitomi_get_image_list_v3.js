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
var o = 0;
switch (g) {
case 1010:
case 3228:
case 3065:
case 3947:
case 924:
case 2310:
case 1168:
case 2366:
case 219:
case 2508:
case 158:
case 3718:
case 1149:
case 2668:
case 2299:
case 2120:
case 2125:
case 945:
case 58:
case 4017:
case 845:
case 2159:
case 2892:
case 2712:
case 2537:
case 3070:
case 1608:
case 2681:
case 2833:
case 337:
case 357:
case 3752:
case 1843:
case 3611:
case 2358:
case 2146:
case 1808:
case 1910:
case 1678:
case 405:
case 1852:
case 930:
case 740:
case 3544:
case 1638:
case 3418:
case 3724:
case 1128:
case 3892:
case 1498:
case 3185:
case 3:
case 1012:
case 1704:
case 1790:
case 3475:
case 1042:
case 3508:
case 519:
case 230:
case 907:
case 871:
case 1663:
case 993:
case 3071:
case 2675:
case 1082:
case 3368:
case 3264:
case 2885:
case 1448:
case 3037:
case 3673:
case 171:
case 1389:
case 991:
case 3874:
case 2126:
case 806:
case 3816:
case 2144:
case 133:
case 3379:
case 3001:
case 1287:
case 3279:
case 1659:
case 3590:
case 1070:
case 1359:
case 3347:
case 2484:
case 723:
case 233:
case 1516:
case 2267:
case 1248:
case 3011:
case 2930:
case 702:
case 227:
case 1737:
case 1121:
case 620:
case 2149:
case 673:
case 3110:
case 1383:
case 3707:
case 95:
case 3047:
case 18:
case 3397:
case 3395:
case 1735:
case 463:
case 873:
case 2363:
case 1151:
case 1950:
case 600:
case 2818:
case 2567:
case 1686:
case 1929:
case 2380:
case 749:
case 644:
case 3885:
case 3124:
case 1449:
case 2633:
case 1161:
case 656:
case 4045:
case 1818:
case 2728:
case 3869:
case 1114:
case 411:
case 3574:
case 755:
case 417:
case 3890:
case 175:
case 3757:
case 3609:
case 1763:
case 2010:
case 3338:
case 2588:
case 506:
case 618:
case 2127:
case 1376:
case 3745:
case 3749:
case 423:
case 1216:
case 2332:
case 1625:
case 3528:
case 2265:
case 2604:
case 728:
case 2259:
case 220:
case 1976:
case 2049:
case 843:
case 1369:
case 3919:
case 407:
case 2775:
case 2022:
case 3366:
case 1046:
case 2906:
case 780:
case 2034:
case 763:
case 3925:
case 1716:
case 3651:
case 670:
case 751:
case 3202:
case 3720:
case 1116:
case 3383:
case 2165:
case 3443:
case 270:
case 3538:
case 3061:
case 1153:
case 3198:
case 971:
case 3748:
case 1219:
case 43:
case 3828:
case 1033:
case 3101:
case 2317:
case 1220:
case 2933:
case 364:
case 3523:
case 3354:
case 3072:
case 2719:
case 922:
case 2168:
case 698:
case 2622:
case 3935:
case 3569:
case 2559:
case 2985:
case 682:
case 2504:
case 2841:
case 982:
case 3445:
case 3567:
case 1639:
case 281:
case 37:
case 1254:
case 1300:
case 3407:
case 352:
case 2514:
case 435:
case 2876:
case 3109:
case 1988:
case 3358:
case 473:
case 2436:
case 824:
case 2528:
case 3932:
case 3610:
case 1995:
case 3494:
case 2023:
case 1552:
case 1984:
case 1132:
case 1231:
case 2935:
case 3274:
case 50:
case 1368:
case 3105:
case 2636:
case 3577:
case 109:
case 2820:
case 2905:
case 745:
case 3350:
case 609:
case 2995:
case 4069:
case 1152:
case 1803:
case 1765:
case 1298:
case 2405:
case 1154:
case 1556:
case 3280:
case 188:
case 3830:
case 796:
case 2263:
case 1972:
case 921:
case 1160:
case 1509:
case 1778:
case 2759:
case 839:
case 272:
case 180:
case 3396:
case 2382:
case 3904:
case 983:
case 2185:
case 1729:
case 305:
case 3404:
case 3649:
case 1664:
case 1709:
case 1753:
case 3767:
case 297:
case 478:
case 1780:
case 2032:
case 2717:
case 3349:
case 3004:
case 1546:
case 611:
case 2394:
case 2329:
case 2988:
case 4050:
case 811:
case 3222:
case 2212:
case 3064:
case 3867:
case 4030:
case 554:
case 443:
case 1094:
case 1277:
case 876:
case 264:
case 2522:
case 254:
case 2424:
case 3553:
case 3736:
case 1207:
case 1674:
case 3690:
case 1145:
case 1487:
case 580:
case 2850:
case 1543:
case 2118:
case 2130:
case 485:
case 149:
case 92:
case 2523:
case 546:
case 1741:
case 108:
case 2672:
case 2452:
case 1468:
case 3884:
case 2855:
case 3193:
case 1122:
case 2119:
case 3382:
case 53:
case 579:
case 2984:
case 3160:
case 3893:
case 1080:
case 1742:
case 4093:
case 828:
case 3033:
case 3584:
case 105:
case 3496:
case 2947:
case 328:
case 490:
case 3010:
case 118:
case 903:
case 1844:
case 505:
case 2223:
case 825:
case 2025:
case 1096:
case 3319:
case 2796:
case 2387:
case 17:
case 2676:
case 197:
case 1169:
case 1494:
case 3303:
case 1865:
case 1272:
case 2782:
case 3671:
case 3835:
case 3597:
case 3376:
case 2950:
case 2551:
case 1092:
case 1580:
case 2858:
case 1420:
case 2752:
case 4001:
case 1367:
case 1434:
case 3739:
case 2167:
case 1892:
case 3026:
case 2328:
case 3062:
case 564:
case 3474:
case 895:
case 366:
case 102:
case 3741:
case 1436:
case 3255:
case 1135:
case 889:
case 1444:
case 636:
case 4043:
case 919:
case 4051:
case 3102:
case 3680:
case 3572:
case 1707:
case 3470:
case 2679:
case 1257:
case 3315:
case 3203:
case 353:
case 2274:
case 436:
case 3314:
case 1344:
case 2081:
case 2563:
case 2301:
case 3266:
case 1945:
case 3846:
case 172:
case 2092:
case 415:
case 2374:
case 933:
case 4067:
case 3285:
case 544:
case 2689:
case 926:
case 3518:
case 3993:
case 414:
case 1649:
case 1539:
case 952:
case 3695:
case 260:
case 1648:
case 483:
case 3153:
case 2384:
case 3052:
case 3808:
case 2670:
case 3662:
case 2391:
case 3258:
case 942:
case 3465:
case 2371:
case 1109:
case 2761:
case 1629:
case 388:
case 257:
case 770:
case 2612:
case 2926:
case 1572:
case 968:
case 1410:
case 3361:
case 3682:
case 605:
case 120:
case 2596:
case 576:
case 2624:
case 1127:
case 1799:
case 3955:
case 832:
case 717:
case 1119:
case 2937:
case 2322:
case 2692:
case 1680:
case 144:
case 3219:
case 1011:
case 2998:
case 2631:
case 2076:
case 3801:
case 3507:
case 3078:
case 681:
case 893:
case 2784:
case 2599:
case 117:
case 3357:
case 3269:
case 1262:
case 3667:
case 947:
case 3463:
case 2326:
case 555:
case 3953:
case 1419:
case 1783:
case 287:
case 3270:
case 3958:
case 2865:
case 33:
case 1379:
case 2290:
case 2181:
case 3854:
case 3971:
case 1189:
case 2216:
case 1848:
case 3861:
case 1744:
case 3811:
case 374:
case 586:
case 3889:
case 124:
case 3103:
case 2533:
case 821:
case 1747:
case 977:
case 10:
case 1587:
case 1360:
case 3901:
case 3367:
case 1752:
case 1486:
case 3048:
case 2598:
case 2351:
case 500:
case 1447:
case 906:
case 3215:
case 3723:
case 1873:
case 3098:
case 1021:
case 4023:
case 3802:
case 2628:
case 2060:
case 1771:
case 851:
case 667:
case 3132:
case 4083:
case 999:
case 3845:
case 3731:
case 3700:
case 3298:
case 3093:
case 1634:
case 2776:
case 1025:
case 1099:
case 2959:
case 622:
case 1573:
case 1023:
case 232:
case 285:
case 624:
case 3479:
case 1385:
case 131:
case 2434:
case 1226:
case 2552:
case 1881:
case 3956:
case 640:
case 3863:
case 3019:
case 1827:
case 3113:
case 759:
case 3691:
case 3951:
case 430:
case 2629:
case 2994:
case 3427:
case 1576:
case 842:
case 3491:
case 1202:
case 2443:
case 1384:
case 2610:
case 1928:
case 606:
case 946:
case 143:
case 147:
case 1781:
case 802:
case 1404:
case 2751:
case 2244:
case 888:
case 1812:
case 2314:
case 1069:
case 2614:
case 2219:
case 82:
case 3107:
case 1326:
case 119:
case 3663:
case 52:
case 3721:
case 1267:
case 3755:
case 2578:
case 3016:
case 1103:
case 3717:
case 1814:
case 1280:
case 3365:
case 836:
case 309:
case 2773:
case 1445:
case 2388:
case 2315:
case 3999:
case 1789:
case 3765:
case 1758:
case 2704:
case 412:
case 201:
case 267:
case 3133:
case 3374:
case 2731:
case 3941:
case 1048:
case 562:
case 3472:
case 3785:
case 38:
case 2001:
case 2333:
case 1172:
case 331:
case 3600:
case 1849:
case 375:
case 1669:
case 86:
case 14:
case 3143:
case 2356:
case 757:
case 3224:
case 446:
case 3386:
case 976:
case 2602:
case 3142:
case 886:
case 410:
case 326:
case 1585:
case 3677:
case 1858:
case 3751:
case 3834:
case 1985:
case 2368:
case 3769:
case 3086:
case 513:
case 3036:
case 3636:
case 1657:
case 3273:
case 2875:
case 3908:
case 3390:
case 3178:
case 2854:
case 1884:
case 3207:
case 2097:
case 3191:
case 2741:
case 2987:
case 2785:
case 1640:
case 1612:
case 2327:
case 2402:
case 2695:
case 461:
case 2348:
case 604:
case 3272:
case 3085:
case 3876:
case 1252:
case 2303:
case 1065:
case 1510:
case 2027:
case 2474:
case 1036:
case 2811:
case 1602:
case 2073:
case 450:
case 298:
case 1020:
case 868:
case 137:
case 1817:
case 791:
case 3824:
case 321:
case 2557:
case 3481:
case 808:
case 3989:
case 3230:
case 1268:
case 343:
case 2318:
case 1196:
case 3053:
case 1150:
case 3364:
case 425:
case 1526:
case 665:
case 3963:
case 3515:
case 1688:
case 593:
case 517:
case 510:
case 1334:
case 462:
case 2975:
case 1323:
case 1253:
case 3464:
case 1140:
case 3764:
case 700:
case 1613:
case 3853:
case 3810:
case 2276:
case 2647:
case 608:
case 2111:
case 2236:
case 3841:
case 1144:
case 743:
case 2174:
case 4059:
case 2931:
case 1959:
case 3150:
case 1692:
case 1044:
case 4049:
case 3089:
case 2577:
case 215:
case 1880:
case 3972:
case 3814:
case 3506:
case 1329:
case 3411:
case 1684:
case 1563:
case 195:
case 1004:
case 491:
case 1924:
case 3949:
case 2308:
case 2509:
case 2138:
case 537:
case 1542:
case 2191:
case 3612:
case 1373:
case 1101:
case 2088:
case 2075:
case 2132:
case 1311:
case 1926:
case 2894:
case 4006:
case 1592:
case 2466:
case 4088:
case 2746:
case 2117:
case 1318:
case 3435:
case 3943:
case 1263:
case 3114:
case 2703:
case 1809:
case 3608:
case 2502:
case 1754:
case 237:
case 1938:
case 1022:
case 245:
case 2249:
case 3302:
case 847:
case 3842:
case 1469:
case 929:
case 4066:
case 2503:
case 3918:
case 2700:
case 2005:
case 2054:
case 1055:
case 2527:
case 1643:
case 3850:
case 486:
case 1859:
case 170:
case 2878:
case 1730:
case 2139:
case 3516:
case 676:
case 2665:
case 3530:
case 1554:
case 3630:
case 250:
case 3111:
case 3451:
case 2958:
case 3881:
case 1606:
case 2764:
case 236:
case 135:
case 4007:
case 1550:
case 3157:
case 3681:
case 742:
case 3387:
case 293:
case 2192:
case 2769:
case 585:
case 4089:
case 1083:
case 4047:
case 212:
case 1971:
case 3683:
case 4060:
case 2482:
case 2311:
case 1721:
case 2929:
case 3929:
case 3241:
case 3831:
case 1341:
case 2795:
case 2560:
case 3579:
case 2213:
case 1779:
case 2409:
case 2179:
case 2454:
case 3044:
case 548:
case 2770:
case 973:
case 909:
case 294:
case 100:
case 3342:
case 2431:
case 727:
case 2241:
case 1380:
case 3601:
case 3986:
case 3701:
case 662:
case 3139:
case 1986:
case 885:
case 2499:
case 3007:
case 2519:
case 177:
case 2282:
case 2711:
case 987:
case 1496:
case 3607:
case 3879:
case 3326:
case 2888:
case 312:
case 2240:
case 2306:
case 3550:
case 1399:
case 3604:
case 385:
case 1635:
case 368:
case 1830:
case 138:
case 2018:
case 1455:
case 695:
case 1304:
case 2105:
case 1749:
case 1019:
case 1327:
case 1240:
case 2591:
case 3578:
case 1738:
case 2143:
case 3353:
case 3921:
case 1969:
case 960:
case 2562:
case 3894:
case 3433:
case 1616:
case 701:
case 3039:
case 1579:
case 3974:
case 231:
case 2856:
case 1726:
case 2726:
case 1400:
case 2024:
case 3197:
case 449:
case 3742:
case 3983:
case 707:
case 3536:
case 4018:
case 1013:
case 1894:
case 2270:
case 3429:
case 35:
case 985:
case 3832:
case 3750:
case 3288:
case 3005:
case 990:
case 3232:
case 1460:
case 735:
case 2630:
case 2376:
case 2848:
case 694:
case 3247:
case 3542:
case 3774:
case 2350:
case 3250:
case 351:
case 2620:
case 1611:
case 1619:
case 3440:
case 1261:
case 2347:
case 3735:
case 69:
case 2702:
case 5:
case 4016:
case 441:
case 1627:
case 963:
case 2686:
case 1009:
case 3391:
case 1431:
case 964:
case 3151:
case 2046:
case 3911:
case 2085:
case 1406:
case 883:
case 1823:
case 3120:
case 2404:
case 2900:
case 2594:
case 3585:
case 817:
case 2960:
case 2656:
case 107:
case 2253:
case 2813:
case 790:
case 199:
case 1903:
case 3149:
case 1265:
case 2033:
case 2839:
case 228:
case 169:
case 1746:
case 935:
case 1247:
case 3370:
case 3676:
case 1785:
case 1016:
case 1222:
case 3744:
case 2226:
case 2268:
case 2477:
case 1266:
case 1791:
case 1338:
case 975:
case 1559:
case 869:
case 2739:
case 334:
case 501:
case 864:
case 2155:
case 3688:
case 2765:
case 2772:
case 1566:
case 2733:
case 3698:
case 2035:
case 737:
case 3275:
case 134:
case 350:
case 2009:
case 1630:
case 2852:
case 2587:
case 3797:
case 583:
case 1028:
case 709:
case 74:
case 1962:
case 2313:
case 3952:
case 3068:
case 4087:
case 59:
case 2059:
case 1484:
case 207:
case 2019:
case 1904:
case 1548:
case 920:
case 2654:
case 2886:
case 2438:
case 3513:
case 275:
case 810:
case 3678:
case 3772:
case 652:
case 875:
case 3049:
case 3937:
case 1544:
case 2465:
case 664:
case 1159:
case 3345:
case 2203:
case 1992:
case 762:
case 1105:
case 3799:
case 1720:
case 565:
case 2291:
case 2365:
case 3457:
case 3968:
case 2116:
case 3075:
case 2973:
case 81:
case 3910:
case 2708:
case 2965:
case 1133:
case 447:
case 3335:
case 3912:
case 2870:
case 3058:
case 3686:
case 716:
case 1387:
case 2914:
case 370:
case 4092:
case 2608:
case 2693:
case 2037:
case 3905:
case 1955:
case 1854:
case 3205:
case 584:
case 3787:
case 956:
case 972:
case 3320:
case 3243:
case 1292:
case 393:
case 3489:
case 4021:
case 344:
case 2428:
case 2194:
case 2694:
case 2271:
case 2619:
case 3711:
case 2666:
case 469:
case 3944:
case 3249:
case 1002:
case 2479:
case 283:
case 2090:
case 1517:
case 645:
case 3175:
case 3003:
case 2039:
case 524:
case 1802:
case 1845:
case 1733:
case 3076:
case 1834:
case 492:
case 4012:
case 2262:
case 151:
case 1333:
case 2284:
case 1041:
case 373:
case 3713:
case 1241:
case 419:
case 2199:
case 1176:
case 1276:
case 377:
case 974:
case 3760:
case 4013:
case 2760:
case 3154:
case 2478:
case 1600:
case 314:
case 2285:
case 2576:
case 2052:
case 434:
case 1522:
case 4027:
case 1856:
case 2321:
case 2475:
case 354:
case 3308:
case 2893:
case 2147:
case 1470:
case 1098:
case 3728:
case 2615:
case 804:
case 3779:
case 3478:
case 3245:
case 3798:
case 3623:
case 2600:
case 2396:
case 1488:
case 3995:
case 1727:
case 2831:
case 2471:
case 1372:
case 1347:
case 3409:
case 2250:
case 2414:
case 1581:
case 3524:
case 2364:
case 418:
case 2319:
case 1271:
case 482:
case 3271:
case 1866:
case 279:
case 570:
case 3244:
case 612:
case 2640:
case 3803:
case 3996:
case 1201:
case 2255:
case 1208:
case 553:
case 1838:
case 1578:
case 1215:
case 3531:
case 3300:
case 529:
case 2674:
case 1302:
case 989:
case 1473:
case 3186:
case 2564:
case 3074:
case 96:
case 3447:
case 335:
case 1703:
case 1911:
case 4081:
case 2096:
case 901:
case 2881:
case 2279:
case 71:
case 3196:
case 3626:
case 2903:
case 2256:
case 4020:
case 256:
case 3493:
case 261:
case 3318:
case 2606:
case 2883:
case 601:
case 3589:
case 3118:
case 1968:
case 3927:
case 1339:
case 3281:
case 2287:
case 2031:
case 66:
case 2393:
case 3595:
case 2128:
case 1273:
case 2661:
case 2456:
case 3485:
case 3487:
case 1476:
case 336:
case 2389:
case 1037:
case 535:
case 992:
case 1804:
case 1932:
case 1138:
case 3405:
case 166:
case 3240:
case 607:
case 3547:
case 3437:
case 3468:
case 3620:
case 3490:
case 49:
case 2445:
case 4068:
case 3296:
case 1537:
case 4034:
case 4056:
case 1187:
case 319:
case 90:
case 1180:
case 2369:
case 635:
case 3933:
case 2257:
case 1691:
case 3117:
case 1794:
case 2882:
case 4041:
case 3216:
case 1777:
case 3389:
case 489:
case 3561:
case 3887:
case 3560:
case 3401:
case 3722:
case 2832:
case 1204:
case 77:
case 867:
case 3242:
case 1636:
case 3223:
case 613:
case 2190:
case 3747:
case 3486:
case 3038:
case 2909:
case 2529:
case 815:
case 2016:
case 2810:
case 1349:
case 88:
case 3082:
case 3497:
case 2093:
case 3703:
case 3806:
case 1521:
case 813:
case 2013:
case 2232:
case 966:
case 3138:
case 1417:
case 741:
case 1618:
case 3297:
case 404:
case 2734:
case 1595:
case 2843:
case 3211:
case 210:
case 2026:
case 2857:
case 1941:
case 4026:
case 3521:
case 3014:
case 3400:
case 981:
case 4036:
case 777:
case 571:
case 311:
case 2943:
case 1545:
case 3807:
case 1457:
case 3424:
case 1617:
case 2621:
case 1658:
case 764:
case 130:
case 3634:
case 1377:
case 2545:
case 6:
case 296:
case 1564:
case 2297:
case 4078:
case 1610:
case 3928:
case 518:
case 2292:
case 1403:
case 3377:
case 913:
case 1355:
case 1621:
case 859:
case 516:
case 1567:
case 3163:
case 1529:
case 1353:
case 1184:
case 1900:
case 550:
case 3909:
case 1551:
case 3594:
case 3512:
case 3394:
case 3091:
case 3991:
case 2370:
case 599:
case 3734:
case 2506:
case 1209:
case 2014:
case 2307:
case 2354:
case 2921:
case 3646:
case 153:
case 3024:
case 479:
case 890:
case 2919:
case 432:
case 3587:
case 4048:
case 3557:
case 3980:
case 2077:
case 2541:
case 1242:
case 1933:
case 3148:
case 3784:
case 93:
case 1665:
case 468:
case 433:
case 2771:
case 2028:
case 1199:
case 1520:
case 3822:
case 3902:
case 1078:
case 440:
case 178:
case 340:
case 3212:
case 4002:
case 3313:
case 3714:
case 3088:
case 1296:
case 633:
case 2791:
case 278:
case 2211:
case 4094:
case 3321:
case 1690:
case 1443:
case 860:
case 3135:
case 4079:
case 3406:
case 1299:
case 4025:
case 1:
case 1047:
case 1492:
case 3323:
case 944:
case 3719:
case 1821:
case 1882:
case 2062:
case 1755:
case 64:
case 2275:
case 2186:
case 3301:
case 1770:
case 1535:
case 1599:
case 3855:
case 541:
case 4040:
case 3352:
case 302:
case 2408:
case 3981:
case 3727:
case 41:
case 2889:
case 1628:
case 3631:
case 329:
case 2916:
case 1857:
case 557:
case 3606:
case 1115:
case 2208:
case 132:
case 2056:
case 3702:
case 19:
case 2829:
case 3563:
case 3880:
case 840:
case 787:
case 4005:
case 2897:
case 3934:
case 3820:
case 1171:
case 1158:
case 1518:
case 659:
case 3136:
case 25:
case 451:
case 2632:
case 3945:
case 1485:
case 778:
case 795:
case 3312:
case 3960:
case 392:
case 3556:
case 1569:
case 1361:
case 2786:
case 2392:
case 358:
case 3056:
case 40:
case 2184:
case 1200:
case 752:
case 317:
case 2:
case 2379:
case 2806:
case 1800:
case 3503:
case 168:
case 710:
case 1146:
case 2939:
case 1110:
case 3431:
case 2467:
case 495:
case 3829:
case 807:
case 3529:
case 3108:
case 1626:
case 1868:
case 1464:
case 3730:
case 677:
case 3174:
case 1315:
case 2495:
case 2342:
case 1558:
case 3837:
case 360:
case 457:
case 954:
case 2535:
case 3060:
case 3008:
case 684:
case 3753:
case 2755:
case 3115:
case 2911:
case 401:
case 2247:
case 295:
case 2956:
case 2625:
case 2844:
case 263:
case 1352:
case 2015:
case 2798:
case 1594:
case 1432:
case 1527:
case 2531:
case 3420:
case 1764:
case 3041:
case 1038:
case 306:
case 330:
case 1330:
case 187:
case 205:
case 3322:
case 2418:
case 3164:
case 2747:
case 2590:
case 912:
case 1451:
case 499:
case 1896:
case 3675:
case 2205:
case 642:
case 2938:
case 1607:
case 1695:
case 1188:
case 3213:
case 1007:
case 4065:
case 1077:
case 2593:
case 3654:
case 2538:
case 1162:
case 1952:
case 3613:
case 1175:
case 2266:
case 202:
case 2819:
case 85:
case 1662:
case 577:
case 3635:
case 3239:
case 904:
case 2680:
case 191:
case 339:
case 381:
case 3233:
case 3453:
case 714:
case 1681:
case 3316:
case 3756:
case 1217:
case 3838:
case 2413:
case 1538:
case 2696:
case 1054:
case 1312:
case 1290:
case 3668:
case 217:
case 2859:
case 4032:
case 2638:
case 610:
case 7:
case 2377:
case 2554:
case 1397:
case 2517:
case 1689:
case 3159:
case 2613:
case 361:
case 2058:
case 1411:
case 1057:
case 2869:
case 3865:
case 190:
case 3436:
case 1943:
case 378:
case 3324:
case 1405:
case 3575:
case 2501:
case 2273:
case 2182:
case 2231:
case 2345:
case 1710:
case 899:
case 3336:
case 1672:
case 1906:
case 3985:
case 1293:
case 581:
case 286:
case 2235:
case 1936:
case 950:
case 1623:
case 3710:
case 3640:
case 416:
case 2400:
case 1909:
case 1614:
case 73:
case 1589:
case 3545:
case 3183:
case 1441:
case 34:
case 464:
case 3818:
case 1045:
case 3095:
case 1916:
case 3256:
case 159:
case 2209:
case 2736:
case 1934:
case 870:
case 2651:
case 3473:
case 3551:
case 3278:
case 224:
case 3025:
case 1787:
case 2635:
case 140:
case 160:
case 2698:
case 3254:
case 2450:
case 647:
case 342:
case 15:
case 409:
case 3591:
case 459:
case 630:
case 2131:
case 98:
case 3782:
case 820:
case 928:
case 2962:
case 3653:
case 879:
case 1923:
case 3498:
case 779:
case 750:
case 691:
case 3081:
case 3441:
case 460:
case 2173:
case 646:
case 78:
case 1533:
case 3392:
case 1156:
case 0:
case 844:
case 1893:
case 3729:
case 1907:
case 547:
case 3337:
case 2715:
case 2671:
case 1813:
case 746:
case 2107:
case 2945:
case 1811:
case 2437:
case 1297:
case 2246:
case 1117:
case 3625:
case 2891:
case 2103:
case 1975:
case 1458:
case 1224:
case 211:
case 3237:
case 3221:
case 1862:
case 2269:
case 2448:
case 2830:
case 734:
case 4055:
case 797:
case 3645:
case 2178:
case 725:
case 91:
case 3015:
case 2261:
case 2110:
case 1570:
case 327:
case 849:
case 1874:
case 603:
case 2280:
case 663:
case 2142:
case 2461:
case 362:
case 1195:
case 1197:
case 2401:
case 1850:
case 1819:
case 2239:
case 54:
case 2312:
case 2204:
case 668:
case 649:
case 1362:
case 575:
case 2373:
case 1450:
case 128:
case 2757:
case 567:
case 2808:
case 3090:
case 115:
case 3554:
case 239:
case 251:
case 626:
case 1512:
case 1935:
case 3900:
case 1820:
case 2794:
case 589:
case 2264:
case 688:
case 3403:
case 733:
case 3973:
case 1831:
case 2553:
case 3504:
case 1394:
case 503:
case 235:
case 1525:
case 872:
case 196:
case 3168:
case 2779:
case 2954:
case 346:
case 3248:
case 683:
case 3775:
case 1032:
case 1090:
case 669:
case 390:
case 27:
case 540:
case 2207:
case 3171:
case 213:
case 3520:
case 2493:
case 831:
case 2977:
case 2780:
case 292:
case 2948:
case 1877:
case 2910:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1665572401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,];
var gg_b = "1665572401/";

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
