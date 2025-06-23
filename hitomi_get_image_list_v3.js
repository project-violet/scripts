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
case 2541:
case 1736:
case 1983:
case 2376:
case 285:
case 247:
case 3134:
case 917:
case 2196:
case 2692:
case 2215:
case 2005:
case 2503:
case 2892:
case 593:
case 3209:
case 2845:
case 1527:
case 3580:
case 1281:
case 265:
case 3330:
case 2111:
case 2288:
case 1506:
case 2499:
case 2657:
case 4093:
case 1164:
case 2477:
case 1373:
case 2733:
case 2986:
case 634:
case 3766:
case 1193:
case 1942:
case 1202:
case 492:
case 2514:
case 3829:
case 1107:
case 1429:
case 2087:
case 838:
case 1435:
case 3531:
case 1309:
case 3629:
case 3782:
case 3635:
case 751:
case 4026:
case 1561:
case 3971:
case 464:
case 870:
case 1865:
case 675:
case 421:
case 3302:
case 1951:
case 714:
case 1789:
case 2327:
case 1423:
case 3268:
case 3623:
case 3021:
case 3844:
case 3252:
case 1795:
case 2129:
case 3823:
case 1742:
case 2933:
case 3279:
case 2348:
case 2075:
case 2573:
case 628:
case 573:
case 3749:
case 1238:
case 910:
case 117:
case 3372:
case 1496:
case 3771:
case 139:
case 881:
case 35:
case 3696:
case 3203:
case 3145:
case 2634:
case 1037:
case 3611:
case 1352:
case 1989:
case 315:
case 3515:
case 3901:
case 861:
case 1540:
case 1379:
case 1199:
case 2725:
case 4077:
case 952:
case 2493:
case 2464:
case 783:
case 3588:
case 3338:
case 3286:
case 992:
case 403:
case 2351:
case 2690:
case 3332:
case 3731:
case 3167:
case 279:
case 771:
case 3805:
case 3378:
case 696:
case 2797:
case 3543:
case 61:
case 1362:
case 787:
case 1761:
case 1137:
case 316:
case 1940:
case 3524:
case 767:
case 4037:
case 305:
case 2819:
case 655:
case 3501:
case 439:
case 417:
case 1589:
case 148:
case 1536:
case 1386:
case 2973:
case 1269:
case 2703:
case 984:
case 2271:
case 1727:
case 3780:
case 2960:
case 73:
case 1706:
case 1278:
case 577:
case 3566:
case 1487:
case 524:
case 3239:
case 3300:
case 3346:
case 3571:
case 1270:
case 2997:
case 410:
case 218:
case 676:
case 3675:
case 344:
case 948:
case 121:
case 760:
case 791:
case 1551:
case 184:
case 1026:
case 780:
case 3715:
case 3428:
case 100:
case 3875:
case 1263:
case 3308:
case 2539:
case 2952:
case 2023:
case 1847:
case 3233:
case 972:
case 2266:
case 2187:
case 299:
case 3447:
case 2804:
case 2562:
case 1647:
case 2821:
case 1018:
case 597:
case 3190:
case 1112:
case 2282:
case 331:
case 3756:
case 1906:
case 1691:
case 1948:
case 452:
case 849:
case 1093:
case 1350:
case 570:
case 3491:
case 1776:
case 2586:
case 3174:
case 1208:
case 243:
case 266:
case 2201:
case 2813:
case 3119:
case 907:
case 2773:
case 2941:
case 1583:
case 538:
case 2243:
case 1927:
case 286:
case 304:
case 1573:
case 380:
case 654:
case 3963:
case 391:
case 519:
case 3970:
case 3122:
case 360:
case 3261:
case 3055:
case 744:
case 2238:
case 1327:
case 2272:
case 2423:
case 3607:
case 1231:
case 3530:
case 598:
case 4029:
case 4035:
case 1135:
case 3047:
case 2341:
case 2742:
case 479:
case 3248:
case 1418:
case 3893:
case 525:
case 2199:
case 3016:
case 56:
case 3908:
case 1758:
case 3618:
case 1493:
case 2397:
case 3946:
case 1464:
case 1762:
case 1361:
case 3778:
case 3227:
case 1509:
case 3685:
case 985:
case 239:
case 1634:
case 2751:
case 1834:
case 3769:
case 965:
case 3885:
case 2118:
case 1288:
case 2506:
case 443:
case 1499:
case 3717:
case 1657:
case 2054:
case 252:
case 2164:
case 1477:
case 1733:
case 2373:
case 3899:
case 1857:
case 2995:
case 2202:
case 2548:
case 1541:
case 486:
case 147:
case 1645:
case 3763:
case 1410:
case 3610:
case 1750:
case 2527:
case 2281:
case 3770:
case 1111:
case 2253:
case 3388:
case 108:
case 2561:
case 3932:
case 768:
case 418:
case 3969:
case 2622:
case 940:
case 2951:
case 1925:
case 2429:
case 3020:
case 3978:
case 2684:
case 2435:
case 3746:
case 3572:
case 4023:
case 33:
case 636:
case 1539:
case 3702:
case 459:
case 3301:
case 635:
case 1952:
case 1525:
case 2847:
case 3421:
case 3324:
case 1914:
case 3120:
case 199:
case 3343:
case 2217:
case 3972:
case 1804:
case 1562:
case 1044:
case 1821:
case 3532:
case 3959:
case 3382:
case 221:
case 264:
case 284:
case 2026:
case 2655:
case 1979:
case 200:
case 2294:
case 2263:
case 2740:
case 465:
case 3637:
case 42:
case 3498:
case 3500:
case 1096:
case 1773:
case 2333:
case 64:
case 346:
case 1437:
case 1698:
case 715:
case 1760:
case 3413:
case 2927:
case 447:
case 3753:
case 3837:
case 186:
case 485:
case 2246:
case 292:
case 2154:
case 2891:
case 2906:
case 2691:
case 1667:
case 2595:
case 2542:
case 1336:
case 1586:
case 2208:
case 3419:
case 898:
case 3981:
case 2761:
case 1819:
case 986:
case 1779:
case 2200:
case 2325:
case 1714:
case 3654:
case 3490:
case 1454:
case 1351:
case 662:
case 1752:
case 3612:
case 3902:
case 1674:
case 837:
case 1890:
case 3812:
case 2077:
case 3371:
case 3474:
case 526:
case 213:
case 3191:
case 2820:
case 2278:
case 3517:
case 558:
case 533:
case 272:
case 2487:
case 2976:
case 1383:
case 3147:
case 3084:
case 2620:
case 248:
case 918:
case 3594:
case 1973:
case 3065:
case 3563:
case 432:
case 3251:
case 1550:
case 2269:
case 1703:
case 3128:
case 601:
case 3022:
case 3155:
case 351:
case 88:
case 3570:
case 2195:
case 2646:
case 2375:
case 2216:
case 2964:
case 2048:
case 2142:
case 2512:
case 323:
case 2918:
case 202:
case 3424:
case 425:
case 1601:
case 840:
case 3722:
case 3689:
case 579:
case 1911:
case 645:
case 1624:
case 832:
case 3401:
case 796:
case 2027:
case 687:
case 1298:
case 667:
case 3765:
case 1041:
case 1824:
case 2985:
case 3443:
case 1996:
case 48:
case 498:
case 2863:
case 2670:
case 3836:
case 224:
case 1079:
case 133:
case 2710:
case 2061:
case 2870:
case 2663:
case 2228:
case 2450:
case 336:
case 1337:
case 2433:
case 63:
case 3520:
case 1587:
case 789:
case 1068:
case 4058:
case 1204:
case 3398:
case 2617:
case 419:
case 2907:
case 1014:
case 2247:
case 769:
case 3313:
case 1052:
case 4062:
case 82:
case 4050:
case 776:
case 311:
case 660:
case 599:
case 3170:
case 3922:
case 691:
case 2669:
case 3374:
case 1796:
case 3471:
case 680:
case 3194:
case 1150:
case 847:
case 1073:
case 885:
case 3965:
case 2793:
case 3547:
case 2764:
case 2462:
case 1935:
case 1929:
case 909:
case 3030:
case 2718:
case 2425:
case 2878:
case 4033:
case 3117:
case 518:
case 2458:
case 3642:
case 442:
case 1495:
case 3591:
case 622:
case 2977:
case 1290:
case 3695:
case 1274:
case 1723:
case 3516:
case 566:
case 3842:
case 2999:
case 3449:
case 3883:
case 478:
case 3683:
case 2910:
case 2537:
case 808:
case 2600:
case 1483:
case 2387:
case 1307:
case 3480:
case 4009:
case 178:
case 3181:
case 257:
case 2510:
case 1109:
case 925:
case 96:
case 3827:
case 1880:
case 2577:
case 293:
case 3648:
case 52:
case 382:
case 3046:
case 1448:
case 3218:
case 2599:
case 1406:
case 3102:
case 585:
case 3606:
case 1326:
case 142:
case 3264:
case 1033:
case 2396:
case 3431:
case 249:
case 2176:
case 3584:
case 3947:
case 3130:
case 2754:
case 2452:
case 3017:
case 1831:
case 508:
case 2838:
case 1705:
case 1160:
case 559:
case 3070:
case 3928:
case 2479:
case 1318:
case 741:
case 3063:
case 3565:
case 2036:
case 3094:
case 4060:
case 1393:
case 775:
case 2638:
case 614:
case 1173:
case 1364:
case 3676:
case 3345:
case 1168:
case 3078:
case 1987:
case 3392:
case 3791:
case 1476:
case 4014:
case 3172:
case 1310:
case 273:
case 3716:
case 1025:
case 409:
case 1114:
case 3456:
case 1058:
case 335:
case 2630:
case 1152:
case 4:
case 2460:
case 2526:
case 2653:
case 3069:
case 2051:
case 3357:
case 2265:
case 250:
case 1179:
case 3138:
case 3032:
case 2222:
case 1377:
case 3159:
case 198:
case 2853:
case 2881:
case 756:
case 1292:
case 1511:
case 70:
case 327:
case 1141:
case 646:
case 34:
case 795:
case 374:
case 3840:
case 2083:
case 4003:
case 16:
case 2681:
case 125:
case 426:
case 2095:
case 2564:
case 2802:
case 1257:
case 663:
case 2042:
case 683:
case 942:
case 3277:
case 2912:
case 1888:
case 3166:
case 735:
case 500:
case 1764:
case 1462:
case 2133:
case 584:
case 3858:
case 3662:
case 1076:
case 3504:
case 1718:
case 1425:
case 3521:
case 3639:
case 521:
case 1305:
case 1220:
case 3287:
case 2354:
case 990:
case 4036:
case 328:
case 2312:
case 1669:
case 3734:
case 977:
case 1136:
case 2150:
case 1632:
case 2073:
case 2575:
case 3513:
case 2649:
case 3124:
case 2219:
case 457:
case 1189:
case 395:
case 170:
case 615:
case 606:
case 3945:
case 3598:
case 4089:
case 197:
case 1537:
case 1910:
case 356:
case 3992:
case 2849:
case 3205:
case 1387:
case 2495:
case 3686:
case 3182:
case 2442:
case 3088:
case 2290:
case 3567:
case 2723:
case 902:
case 1999:
case 2601:
case 2911:
case 2624:
case 2843:
case 2489:
case 2643:
case 3519:
case 2041:
case 1985:
case 2213:
case 3934:
case 2996:
case 1195:
case 1808:
case 1646:
case 2735:
case 762:
case 2186:
case 1048:
case 1512:
case 3408:
case 2267:
case 782:
case 1918:
case 507:
case 3328:
case 1608:
case 1777:
case 2162:
case 803:
case 2944:
case 2204:
case 1817:
case 2866:
case 1617:
case 2125:
case 1799:
case 3833:
case 1247:
case 2158:
case 190:
case 1863:
case 1670:
case 1151:
case 1894:
case 161:
case 3850:
case 1926:
case 3470:
case 3792:
case 450:
case 2436:
case 3494:
case 177:
case 3463:
case 1710:
case 3650:
case 1061:
case 1694:
case 1870:
case 1450:
case 1228:
case 817:
case 3745:
case 3713:
case 1653:
case 1051:
case 481:
case 477:
case 3660:
case 754:
case 2179:
case 3673:
case 711:
case 3860:
case 1222:
case 1737:
case 490:
case 298:
case 1853:
case 2062:
case 2168:
case 2310:
case 173:
case 237:
case 3767:
case 2523:
case 3430:
case 2039:
case 1284:
case 3229:
case 1630:
case 2152:
case 1095:
case 1593:
case 2688:
case 1564:
case 402:
case 1148:
case 2086:
case 1042:
case 872:
case 1106:
case 3721:
case 1602:
case 3990:
case 539:
case 2245:
case 3809:
case 2905:
case 2292:
case 2511:
case 3049:
case 1127:
case 2815:
case 3384:
case 2141:
case 3481:
case 1585:
case 1329:
case 26:
case 225:
case 848:
case 2787:
case 3188:
case 2448:
case 453:
case 1599:
case 230:
case 912:
case 1403:
case 3115:
case 2680:
case 3024:
case 497:
case 1140:
case 3603:
case 2427:
case 3913:
case 3001:
case 616:
case 278:
case 470:
case 864:
case 31:
case 1937:
case 1510:
case 2109:
case 396:
case 3998:
case 3545:
case 3043:
case 1838:
case 2160:
case 688:
case 1479:
case 2318:
case 2975:
case 3719:
case 3697:
case 3459:
case 2050:
case 3879:
case 2364:
case 3066:
case 510:
case 1468:
case 1672:
case 2385:
case 2631:
case 2033:
case 2535:
case 3668:
case 973:
case 3774:
case 149:
case 1311:
case 3652:
case 1712:
case 1414:
case 4076:
case 3244:
case 3921:
case 3790:
case 3868:
case 3614:
case 1754:
case 389:
case 736:
case 892:
case 1872:
case 3156:
case 3647:
case 2578:
case 2120:
case 673:
case 2343:
case 1447:
case 2421:
case 2301:
case 300:
case 2236:
case 3263:
case 3628:
case 1455:
case 988:
case 384:
case 2569:
case 3655:
case 896:
case 732:
case 3475:
case 81:
case 364:
case 3961:
case 1346:
case 3828:
case 3270:
case 1675:
case 2382:
case 17:
case 2781:
case 321:
case 2753:
case 2413:
case 1317:
case 905:
case 3927:
case 246:
case 99:
case 2366:
case 1034:
case 2289:
case 869:
case 3776:
case 3208:
case 1174:
case 4090:
case 3691:
case 595:
case 3064:
case 3948:
case 263:
case 3350:
case 283:
case 3906:
case 556:
case 3112:
case 612:
case 889:
case 131:
case 747:
case 1501:
case 45:
case 3325:
case 785:
case 1524:
case 105:
case 3405:
case 1113:
case 3358:
case 2283:
case 2759:
case 4013:
case 657:
case 2981:
case 19:
case 72:
case 1805:
case 2419:
case 876:
case 2738:
case 1378:
case 1332:
case 2546:
case 1731:
case 2371:
case 2474:
case 693:
case 2854:
case 2812:
case 3077:
case 1988:
case 2612:
case 2902:
case 2295:
case 1369:
case 931:
case 2508:
case 4067:
case 2490:
case 1057:
case 2116:
case 3099:
case 2084:
case 429:
case 3748:
case 3620:
case 1687:
case 649:
case 1566:
case 1258:
case 1420:
case 541:
case 3976:
case 2517:
case 1262:
case 372:
case 1104:
case 3232:
case 708:
case 3727:
case 1780:
case 2128:
case 188:
case 2953:
case 2022:
case 3269:
case 3536:
case 97:
case 214:
case 0:
case 2626:
case 2553:
case 2028:
case 2122:
case 2261:
case 468:
case 280:
case 2963:
case 3783:
case 204:
case 2826:
case 1966:
case 1214:
case 3444:
case 3341:
case 3576:
case 2807:
case 1252:
case 834:
case 3795:
case 1823:
case 2047:
case 1623:
case 3303:
case 799:
case 1844:
case 2380:
case 2607:
case 2530:
case 129:
case 1004:
case 303:
case 4057:
case 2778:
case 2091:
case 653:
case 1982:
case 3397:
case 2946:
case 222:
case 638:
case 2908:
case 2618:
case 3379:
case 2502:
case 2016:
case 3314:
case 875:
case 4092:
case 1241:
case 1924:
case 2885:
case 3751:
case 1611:
case 416:
case 841:
case 3989:
case 1013:
case 1896:
case 49:
case 1696:
case 1145:
case 106:
case 1811:
case 317:
case 2732:
case 3496:
case 1771:
case 2331:
case 1192:
case 15:
case 431:
case 2677:
case 3164:
case 2899:
case 51:
case 596:
case 352:
case 1353:
case 1090:
case 3506:
case 2457:
case 602:
case 3012:
case 3281:
case 1330:
case 2770:
case 2356:
case 2810:
case 915:
case 2900:
case 2492:
case 95:
case 3983:
case 1134:
case 1019:
case 2763:
case 2240:
case 661:
case 444:
case 1701:
case 47:
case 690:
case 3789:
case 1724:
case 624:
case 895:
case 2559:
case 677:
case 1743:
case 3253:
case 589:
case 856:
case 681:
case 2538:
case 2746:
case 1782:
case 1635:
case 3230:
case 1484:
case 3429:
case 3684:
case 3435:
case 3884:
case 3107:
case 2315:
case 929:
case 1835:
case 1829:
case 2332:
case 1546:
case 2731:
case 1474:
case 1191:
case 3674:
case 3890:
case 963:
case 2988:
case 630:
case 1612:
case 1902:
case 2369:
case 1242:
case 2501:
case 2524:
case 1283:
case 3819:
case 1759:
case 1981:
case 2543:
case 29:
case 946:
case 3909:
case 216:
case 1155:
case 536:
case 1570:
case 3703:
case 827:
case 1128:
case 1953:
case 3175:
case 84:
case 1251:
case 3550:
case 491:
case 4028:
case 114:
case 3973:
case 1065:
case 1084:
case 2300:
case 2225:
case 3533:
case 3029:
case 2420:
case 3383:
case 1930:
case 2262:
case 2121:
case 2887:
case 1349:
case 2956:
case 2104:
case 2875:
case 951:
case 2455:
case 1569:
case 1938:
case 2346:
case 2571:
case 3997:
case 318:
case 2675:
case 27:
case 1382:
case 1781:
case 244:
case 2788:
case 1578:
case 637:
case 2931:
case 1972:
case 3562:
case 3604:
case 1324:
case 4020:
case 3914:
case 3539:
case 3621:
case 3952:
case 3525:
case 3023:
case 2394:
case 3336:
case 2363:
case 343:
case 163:
case 2190:
case 3282:
case 231:
case 2549:
case 3613:
case 68:
case 3903:
case 717:
case 1837:
case 3011:
case 386:
case 3760:
case 3898:
case 1413:
case 3243:
case 3105:
case 2317:
case 3773:
case 146:
case 3224:
case 445:
case 3437:
case 3941:
case 1366:
case 1637:
case 3201:
case 625:
case 1498:
case 2034:
case 1289:
case 1500:
case 2330:
case 3111:
case 3503:
case 1356:
case 3892:
case 811:
case 446:
case 854:
case 1900:
case 1610:
case 3750:
case 1445:
case 3376:
case 385:
case 1794:
case 347:
case 3645:
case 2019:
case 3196:
case 1240:
case 3986:
case 922:
case 2766:
case 1717:
case 463:
case 2353:
case 3288:
case 2090:
case 3499:
case 1746:
case 2531:
case 2635:
case 2782:
case 3144:
case 3087:
case 1978:
case 3256:
case 501:
case 772:
case 3568:
case 609:
case 3552:
case 520:
case 1276:
case 3514:
case 2835:
case 2829:
case 3123:
case 3340:
case 1969:
case 3579:
case 748:
case 960:
case 2273:
case 991:
case 1559:
case 2260:
case 633:
case 980:
case 2971:
case 1932:
case 2465:
case 2966:
case 1184:
case 3786:
case 2252:
case 1047:
case 2268:
case 3231:
case 1530:
case 229:
case 2749:
case 1626:
case 1553:
case 340:
case 3426:
case 3560:
case 764:
case 1970:
case 1028:
case 160:
case 180:
case 1994:
case 3348:
case 1826:
case 1700:
case 1165:
case 2241:
case 945:
case 2611:
case 215:
case 2013:
case 1769:
case 2901:
case 987:
case 2696:
case 967:
case 2145:
case 2811:
case 1227:
case 1434:
case 1732:
case 2372:
case 1685:
case 25:
case 2588:
case 2067:
case 1091:
case 1818:
case 3493:
case 2982:
case 122:
case 3464:
case 3762:
case 574:
case 54:
case 1618:
case 3739:
case 1248:
case 1893:
case 3418:
case 1016:
case 3377:
case 3197:
case 1159:
case 398:
case 920:
case 2673:
case 1138:
case 2660:
case 2873:
case 4059:
case 2713:
case 3058:
case 135:
case 436:
case 3523:
case 1716:
case 3025:
case 2430:
case 3987:
case 3544:
case 1791:
case 2131:
case 3856:
case 2767:
case 1676:
case 1345:
case 3168:
case 2721:
case 2322:
case 2704:
case 753:
case 1488:
case 2365:
case 423:
case 1299:
case 643:
case 2609:
case 3775:
case 814:
case 325:
case 2919:
case 3815:
case 2534:
case 770:
case 1000:
case 3596:
case 2384:
case 14:
case 3905:
case 3511:
case 2049:
case 1210:
case 3440:
case 522:
case 127:
case 2180:
case 686:
case 851:
case 797:
case 3245:
case 3103:
case 2809:
case 1728:
case 1848:
case 3326:
case 1264:
case 342:
case 1008:
case 3406:
case 2557:
case 2082:
case 4002:
case 182:
case 587:
case 545:
case 1046:
case 1218:
case 2967:
case 679:
case 1648:
case 3787:
case 2998:
case 2641:
case 2545:
case 2043:
case 3880:
case 974:
case 1181:
case 296:
case 927:
case 2603:
case 3427:
case 1480:
case 3234:
case 4081:
case 2001:
case 1627:
case 3680:
case 1285:
case 3307:
case 2841:
case 3050:
case 790:
case 3173:
case 724:
case 2719:
case 1565:
case 2697:
case 846:
case 2438:
case 1094:
case 1861:
case 1070:
case 2679:
case 2614:
case 935:
case 3831:
case 2156:
case 2904:
case 2652:
case 2244:
case 883:
case 2921:
case 2868:
case 2668:
case 1431:
case 1334:
case 1584:
case 3529:
case 1207:
case 3033:
case 3535:
case 2521:
case 2056:
case 2625:
case 1117:
case 2287:
case 1030:
case 773:
case 1319:
case 2166:
case 4017:
case 936:
case 3133:
case 3073:
case 3575:
case 750:
case 1374:
case 3796:
case 1471:
case 154:
case 228:
case 632:
case 4094:
case 420:
case 1390:
case 887:
case 4063:
case 640:
case 3871:
case 1528:
case 3849:
case 2205:
case 2320:
case 583:
case 1081:
case 2400:
case 3009:
case 1449:
case 1883:
case 295:
case 563:
case 2513:
case 3649:
case 2886:
case 1842:
case 2957:
case 3274:
case 1108:
case 4046:
case 3723:
case 923:
case 1516:
case 1002:
case 482:
case 3442:
case 1212:
case 4008:
case 1695:
case 1254:
case 3495:
case 2686:
case 712:
case 1889:
case 3213:
case 3801:
case 3643:
case 1765:
case 427:
case 3824:
case 860:
case 1304:
case 757:
case 2149:
case 3298:
case 2080:
case 891:
case 3489:
case 326:
case 3601:
case 1722:
case 1689:
case 3882:
case 793:
case 2408:
case 3267:
case 2446:
case 2574:
case 3186:
case 1482:
case 234:
case 1784:
case 3729:
case 3682:
case 2417:
case 3923:
case 3052:
case 749:
case 3125:
case 4078:
case 3014:
case 309:
case 2633:
case 1178:
case 3204:
case 822:
case 2031:
case 3666:
case 435:
case 3:
case 3162:
case 1520:
case 3587:
case 1466:
case 3068:
case 551:
case 608:
case 3097:
case 954:
case 3436:
case 2494:
case 2463:
case 1132:
case 2850:
case 2316:
case 911:
case 1169:
case 87:
case 1641:
case 2827:
case 1043:
case 3441:
case 1211:
case 1592:
case 2181:
case 357:
case 3510:
case 196:
case 495:
case 3140:
case 1603:
case 40:
case 2606:
case 2848:
case 2293:
case 2264:
case 2916:
case 2008:
case 4088:
case 2102:
case 262:
case 282:
case 2046:
case 1188:
case 3577:
case 393:
case 613:
case 2648:
case 2991:
case 2806:
case 3452:
case 1904:
case 7:
case 672:
case 1652:
case 2130:
case 3712:
case 3414:
case 1244:
case 1921:
case 1472:
case 1223:
case 2584:
case 2947:
case 1066:
case 4056:
case 3468:
case 294:
case 2226:
case 3638:
case 976:
case 1879:
case 648:
case 3659:
case 2565:
case 1697:
case 1438:
case 2661:
case 428:
case 201:
case 2928:
case 3479:
case 1897:
case 758:
case 3859:
case 1679:
case 2522:
case 3838:
case 2456:
case 3507:
case 989:
case 3284:
case 2078:
case 2791:
case 2172:
case 1767:
case 3830:
case 3473:
case 3222:
case 529:
case 816:
case 441:
case 1673:
case 664:
case 2138:
case 1860:
case 1071:
case 1453:
case 1873:
case 684:
case 350:
case 3460:
case 3526:
case 3051:
case 600:
case 2840:
case 3585:
case 3329:
case 3335:
case 3681:
case 1919:
case 1534:
case 2000:
case 3409:
case 91:
case 868:
case 24:
case 1481:
case 888:
case 2210:
case 227:
case 955:
case 3881:
case 2728:
case 2640:
case 1322:
case 3602:
case 2277:
case 55:
case 3912:
case 692:
case 1402:
case 434:
case 1704:
case 1365:
case 2299:
case 3148:
case 3593:
case 1974:
case 3918:
case 3554:
case 829:
case 3846:
case 3512:
case 516:
case 1355:
case 1590:
case 505:
case 3216:
case 3964:
case 730:
case 3048:
case 3142:
case 3646:
case 2443:
case 4049:
case 2765:
case 2100:
case 3985:
case 2304:
case 2401:
case 1149:
case 995:
case 2237:
case 381:
case 3061:
case 3694:
case 3870:
case 3663:
case 2059:
case 3228:
case 1745:
case 2038:
case 1494:
case 3710:
case 1850:
case 928:
case 815:
case 1470:
case 3863:
case 2836:
case 610:
case 175:
case 3247:
case 1757:
case 3799:
case 2178:
case 2072:
case 3817:
case 1031:
case 3777:
case 2466:
case 3869:
case 1734:
case 2471:
case 3136:
case 2851:
case 2194:
case 2390:
case 2053:
case 975:
case 1469:
case 2528:
case 3832:
case 3878:
case 1639:
case 4066:
case 1625:
case 2117:
case 3305:
case 1287:
case 2030:
case 737:
case 719:
case 1658:
case 3718:
case 3425:
case 2319:
case 1858:
case 1478:
case 3793:
case 1825:
case 2547:
case 489:
case 3764:
case 3678:
case 3707:
case 3999:
case 2895:
case 2516:
case 1182:
case 338:
case 2212:
case 3977:
case 1088:
case 2695:
case 353:
case 2642:
case 603:
case 1686:
case 397:
case 455:
case 3600:
case 10:
case 4001:
case 2081:
case 2683:
case 2883:
case 3040:
case 195:
case 3189:
case 1101:
case 41:
case 76:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750687201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,];
var gg_b = "1750687201/";

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
