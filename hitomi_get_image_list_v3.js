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
var o = 1;
switch (g) {
case 2279:
case 3353:
case 1125:
case 3534:
case 1194:
case 2707:
case 1835:
case 1804:
case 3560:
case 3326:
case 627:
case 3810:
case 3389:
case 1003:
case 3582:
case 193:
case 3687:
case 2936:
case 3652:
case 921:
case 2088:
case 2256:
case 2407:
case 3020:
case 2214:
case 376:
case 517:
case 2433:
case 2329:
case 3283:
case 2631:
case 3775:
case 3343:
case 2201:
case 2297:
case 3335:
case 3028:
case 282:
case 2080:
case 632:
case 1037:
case 715:
case 3642:
case 3259:
case 3547:
case 736:
case 2062:
case 2745:
case 3939:
case 1561:
case 26:
case 1054:
case 417:
case 2386:
case 1811:
case 124:
case 3475:
case 138:
case 903:
case 3263:
case 3875:
case 532:
case 1753:
case 3418:
case 4019:
case 2398:
case 1613:
case 2179:
case 272:
case 617:
case 1726:
case 4081:
case 3640:
case 1574:
case 1624:
case 1695:
case 1489:
case 294:
case 2057:
case 738:
case 242:
case 2123:
case 1789:
case 3149:
case 1869:
case 1997:
case 3588:
case 4074:
case 2366:
case 2156:
case 2520:
case 3908:
case 115:
case 1453:
case 1581:
case 2833:
case 1375:
case 3022:
case 2096:
case 2891:
case 348:
case 3183:
case 109:
case 1236:
case 3077:
case 223:
case 3965:
case 527:
case 2528:
case 2678:
case 1956:
case 559:
case 3710:
case 3900:
case 1606:
case 295:
case 1735:
case 1914:
case 3580:
case 3667:
case 3159:
case 1979:
case 2390:
case 3369:
case 2855:
case 1435:
case 3648:
case 378:
case 1443:
case 427:
case 386:
case 2068:
case 643:
case 1218:
case 25:
case 412:
case 2314:
case 384:
case 1463:
case 116:
case 3494:
case 3668:
case 2166:
case 3289:
case 2067:
case 2439:
case 718:
case 1112:
case 2323:
case 3647:
case 3078:
case 300:
case 1032:
case 1071:
case 583:
case 2808:
case 2292:
case 3226:
case 2739:
case 1876:
case 3945:
case 3253:
case 3696:
case 2198:
case 1883:
case 2677:
case 3725:
case 1763:
case 2527:
case 2402:
case 385:
case 3436:
case 128:
case 899:
case 2346:
case 2058:
case 3991:
case 3907:
case 3717:
case 3169:
case 2865:
case 2785:
case 1998:
case 3359:
case 3587:
case 296:
case 3204:
case 3235:
case 622:
case 2040:
case 3736:
case 3955:
case 1175:
case 3383:
case 3605:
case 126:
case 422:
case 2700:
case 1118:
case 1541:
case 4006:
case 361:
case 2765:
case 734:
case 3567:
case 1212:
case 1749:
case 811:
case 469:
case 2578:
case 2628:
case 3550:
case 3126:
case 1506:
case 2465:
case 569:
case 1986:
case 3680:
case 298:
case 1449:
case 1325:
case 2298:
case 3153:
case 345:
case 3031:
case 522:
case 1064:
case 374:
case 2186:
case 1992:
case 2570:
case 3558:
case 1681:
case 1759:
case 2290:
case 543:
case 3015:
case 2408:
case 4013:
case 1619:
case 716:
case 1030:
case 2052:
case 735:
case 2087:
case 473:
case 3269:
case 612:
case 1776:
case 1459:
case 1524:
case 1674:
case 4051:
case 1783:
case 344:
case 1275:
case 1863:
case 3825:
case 1513:
case 2275:
case 891:
case 787:
case 2783:
case 3446:
case 645:
case 1129:
case 3302:
case 952:
case 2776:
case 2459:
case 1839:
case 967:
case 177:
case 1708:
case 1918:
case 4070:
case 2110:
case 3797:
case 3701:
case 2595:
case 2524:
case 2674:
case 3245:
case 147:
case 1290:
case 2030:
case 75:
case 3746:
case 2483:
case 2064:
case 60:
case 840:
case 3233:
case 2681:
case 2992:
case 1570:
case 857:
case 2394:
case 3291:
case 644:
case 2325:
case 2038:
case 1400:
case 3456:
case 3779:
case 1298:
case 3423:
case 484:
case 312:
case 150:
case 1628:
case 3532:
case 1192:
case 2449:
case 3571:
case 3621:
case 3637:
case 2929:
case 1885:
case 3723:
case 2212:
case 3255:
case 584:
case 88:
case 3904:
case 3935:
case 3479:
case 692:
case 3756:
case 1910:
case 3584:
case 2118:
case 3616:
case 4078:
case 373:
case 1702:
case 1229:
case 2009:
case 750:
case 2175:
case 1:
case 2966:
case 1301:
case 544:
case 3024:
case 2210:
case 1040:
case 4093:
case 3095:
case 1485:
case 2849:
case 87:
case 1785:
case 2998:
case 3823:
case 3564:
case 1402:
case 3133:
case 1800:
case 1058:
case 1379:
case 369:
case 2763:
case 880:
case 3969:
case 3107:
case 3191:
case 2883:
case 3801:
case 461:
case 3006:
case 819:
case 1292:
case 40:
case 1808:
case 545:
case 4027:
case 1067:
case 804:
case 445:
case 4031:
case 2112:
case 3365:
case 575:
case 1323:
case 561:
case 1439:
case 3300:
case 2218:
case 15:
case 1048:
case 1356:
case 2661:
case 685:
case 747:
case 3041:
case 214:
case 2443:
case 3786:
case 3061:
case 3866:
case 3554:
case 2641:
case 3429:
case 697:
case 1068:
case 4028:
case 3773:
case 806:
case 2217:
case 970:
case 3473:
case 317:
case 195:
case 3108:
case 3632:
case 1678:
case 2914:
case 3537:
case 1101:
case 1891:
case 852:
case 209:
case 3949:
case 2375:
case 2743:
case 3486:
case 123:
case 2923:
case 3898:
case 236:
case 678:
case 215:
case 2453:
case 3976:
case 1156:
case 701:
case 3165:
case 142:
case 2312:
case 1123:
case 1057:
case 3503:
case 3890:
case 3492:
case 1082:
case 3983:
case 2869:
case 2789:
case 76:
case 576:
case 3355:
case 488:
case 962:
case 172:
case 4020:
case 546:
case 713:
case 2946:
case 2624:
case 648:
case 3391:
case 3307:
case 929:
case 1398:
case 1034:
case 1005:
case 3609:
case 2753:
case 2054:
case 2561:
case 97:
case 2016:
case 676:
case 1246:
case 101:
case 1386:
case 224:
case 2811:
case 905:
case 4077:
case 1994:
case 3963:
case 586:
case 1925:
case 2889:
case 1373:
case 4022:
case 448:
case 3790:
case 1201:
case 1297:
case 451:
case 2469:
case 3490:
case 2826:
case 3892:
case 478:
case 1445:
case 327:
case 2310:
case 94:
case 3638:
case 2136:
case 113:
case 794:
case 1577:
case 646:
case 1088:
case 1256:
case 3664:
case 2318:
case 3200:
case 225:
case 904:
case 2044:
case 3081:
case 2003:
case 3019:
case 1936:
case 293:
case 597:
case 723:
case 497:
case 2835:
case 2804:
case 332:
case 1392:
case 1599:
case 919:
case 3466:
case 760:
case 1917:
case 1707:
case 2125:
case 795:
case 3090:
case 2437:
case 1762:
case 2421:
case 3649:
case 897:
case 2215:
case 3287:
case 2623:
case 2573:
case 2069:
case 2170:
case 2656:
case 171:
case 606:
case 2293:
case 165:
case 90:
case 2754:
case 3368:
case 1151:
case 2322:
case 3396:
case 2679:
case 2529:
case 2454:
case 2377:
case 3543:
case 1860:
case 1124:
case 3140:
case 1195:
case 3504:
case 1780:
case 3984:
case 1510:
case 3474:
case 3242:
case 3357:
case 3167:
case 3909:
case 886:
case 2703:
case 3659:
case 22:
case 3066:
case 2744:
case 3861:
case 974:
case 2924:
case 2646:
case 2995:
case 2272:
case 639:
case 2444:
case 1007:
case 3553:
case 3098:
case 79:
case 3683:
case 3334:
case 944:
case 2697:
case 3774:
case 2399:
case 210:
case 4018:
case 3676:
case 1106:
case 848:
case 3819:
case 764:
case 2803:
case 1972:
case 2590:
case 876:
case 3362:
case 2115:
case 4075:
case 3569:
case 1888:
case 3881:
case 2193:
case 249:
case 3258:
case 3761:
case 3086:
case 331:
case 1496:
case 3663:
case 3029:
case 1468:
case 1694:
case 1796:
case 3461:
case 2043:
case 846:
case 2328:
case 2035:
case 539:
case 3240:
case 900:
case 506:
case 2089:
case 758:
case 1319:
case 1782:
case 765:
case 1617:
case 771:
case 1862:
case 452:
case 156:
case 3248:
case 2566:
case 608:
case 181:
case 1241:
case 985:
case 2320:
case 1381:
case 21:
case 2131:
case 2053:
case 2127:
case 263:
case 1636:
case 2172:
case 1993:
case 406:
case 1760:
case 1457:
case 3092:
case 2026:
case 3795:
case 2501:
case 1740:
case 845:
case 3944:
case 2692:
case 1920:
case 519:
case 3296:
case 1458:
case 3903:
case 2919:
case 2709:
case 3653:
case 2277:
case 3451:
case 2393:
case 3413:
case 1758:
case 311:
case 2546:
case 1842:
case 875:
case 861:
case 419:
case 3689:
case 3495:
case 3387:
case 3954:
case 3260:
case 2771:
case 3635:
case 3604:
case 47:
case 1610:
case 3706:
case 1467:
case 1750:
case 2299:
case 844:
case 2484:
case 2372:
case 2629:
case 3441:
case 2063:
case 629:
case 3234:
case 3205:
case 1448:
case 948:
case 3643:
case 2864:
case 3741:
case 2120:
case 1928:
case 1181:
case 23:
case 155:
case 951:
case 2784:
case 3188:
case 3937:
case 2514:
case 986:
case 168:
case 3921:
case 44:
case 0:
case 3282:
case 3257:
case 3342:
case 1852:
case 874:
case 1887:
case 2432:
case 57:
case 2430:
case 1452:
case 3097:
case 2871:
case 1008:
case 1324:
case 1395:
case 2076:
case 946:
case 2177:
case 253:
case 2083:
case 2464:
case 64:
case 800:
case 2122:
case 2698:
case 988:
case 605:
case 3168:
case 1161:
case 3358:
case 3841:
case 2884:
case 3046:
case 1787:
case 768:
case 1752:
case 2730:
case 755:
case 429:
case 1517:
case 3350:
case 2199:
case 680:
case 3895:
case 1274:
case 3079:
case 3563:
case 1525:
case 619:
case 570:
case 591:
case 2738:
case 491:
case 3288:
case 1281:
case 604:
case 1341:
case 1858:
case 540:
case 2220:
case 3014:
case 3367:
case 2049:
case 1219:
case 1922:
case 2690:
case 4025:
case 3669:
case 1065:
case 3157:
case 4094:
case 2922:
case 3996:
case 1690:
case 3203:
case 1049:
case 3645:
case 2977:
case 843:
case 2742:
case 2065:
case 3427:
case 2000:
case 3870:
case 2858:
case 3472:
case 621:
case 37:
case 2281:
case 3384:
case 837:
case 2675:
case 2525:
case 3772:
case 959:
case 1738:
case 927:
case 130:
case 3539:
case 1199:
case 1961:
case 2442:
case 3371:
case 2274:
case 3968:
case 2840:
case 2612:
case 2867:
case 2787:
case 511:
case 1730:
case 2517:
case 3905:
case 3715:
case 3655:
case 3254:
case 2848:
case 266:
case 3793:
case 1884:
case 3216:
case 2161:
case 3982:
case 1177:
case 3957:
case 3607:
case 822:
case 2313:
case 319:
case 3309:
case 3493:
case 2452:
case 1228:
case 2850:
case 1832:
case 2395:
case 503:
case 1871:
case 2008:
case 3221:
case 411:
case 2324:
case 3815:
case 4079:
case 2119:
case 1673:
case 1523:
case 3565:
case 2852:
case 3478:
case 340:
case 1432:
case 2887:
case 13:
case 599:
case 3893:
case 1784:
case 3500:
case 1864:
case 1120:
case 1556:
case 3144:
case 2928:
case 268:
case 2748:
case 1686:
case 1063:
case 1579:
case 3025:
case 3962:
case 1331:
case 2039:
case 753:
case 2174:
case 1771:
case 1732:
case 1299:
case 391:
case 2610:
case 4056:
case 2440:
case 3364:
case 2261:
case 1393:
case 329:
case 1222:
case 1838:
case 2458:
case 3872:
case 812:
case 3831:
case 730:
case 1277:
case 3827:
case 1501:
case 3988:
case 4046:
case 3508:
case 1981:
case 1692:
case 2920:
case 3799:
case 3828:
case 120:
case 4066:
case 2880:
case 1026:
case 1837:
case 1821:
case 2915:
case 3138:
case 3987:
case 1172:
case 973:
case 163:
case 3602:
case 2434:
case 2405:
case 1854:
case 631:
case 3284:
case 943:
case 2241:
case 1320:
case 1011:
case 2512:
case 3685:
case 3303:
case 2862:
case 2782:
case 3555:
case 2757:
case 2447:
case 29:
case 3321:
case 3010:
case 2295:
case 789:
case 2468:
case 832:
case 3777:
case 2575:
case 179:
case 4090:
case 3722:
case 1043:
case 2888:
case 3354:
case 2768:
case 3164:
case 1270:
case 2496:
case 3533:
case 308:
case 149:
case 1803:
case 3545:
case 2747:
case 1951:
case 779:
case 1601:
case 3608:
case 1399:
case 1178:
case 1403:
case 3132:
case 1592:
case 2091:
case 189:
case 3420:
case 2896:
case 3822:
case 1444:
case 1227:
case 306:
case 4092:
case 12:
case 3184:
case 264:
case 2868:
case 3940:
case 1924:
case 749:
case 3012:
case 2055:
case 1703:
case 2195:
case 4086:
case 2860:
case 3948:
case 2124:
case 2462:
case 1941:
case 912:
case 2510:
case 241:
case 1322:
case 983:
case 2113:
case 3075:
case 1416:
case 339:
case 3967:
case 2805:
case 2834:
case 720:
case 1454:
case 1906:
case 3950:
case 1170:
case 2361:
case 1656:
case 290:
case 271:
case 2151:
case 2762:
case 1421:
case 2480:
case 2857:
case 2882:
case 1437:
case 4029:
case 1623:
case 1069:
case 531:
case 1892:
case 2276:
case 3080:
case 414:
case 930:
case 3445:
case 1208:
case 2335:
case 3201:
case 2304:
case 509:
case 820:
case 3627:
case 2775:
case 3631:
case 2283:
case 3522:
case 1638:
case 3329:
case 159:
case 2568:
case 2475:
case 3386:
case 3733:
case 625:
case 3062:
case 3373:
case 1790:
case 1185:
case 2642:
case 3994:
case 3925:
case 1963:
case 436:
case 1074:
case 3599:
case 879:
case 2560:
case 3455:
case 3917:
case 2534:
case 1798:
case 1829:
case 2985:
case 953:
case 3279:
case 638:
case 276:
case 3214:
case 624:
case 1766:
case 3491:
case 1664:
case 3088:
case 1498:
case 1200:
case 3693:
case 1630:
case 2652:
case 515:
case 1265:
case 2582:
case 3755:
case 536:
case 2389:
case 3615:
case 1019:
case 849:
case 3101:
case 1537:
case 4054:
case 2580:
case 1108:
case 395:
case 117:
case 1473:
case 424:
case 2710:
case 2176:
case 438:
case 4016:
case 360:
case 2650:
case 2965:
case 323:
case 1898:
case 1949:
case 3807:
case 1486:
case 93:
case 615:
case 251:
case 1333:
case 3068:
case 4021:
case 1061:
case 636:
case 1554:
case 1866:
case 278:
case 2648:
case 2562:
case 82:
case 2159:
case 1773:
case 2812:
case 759:
case 425:
case 2640:
case 1239:
case 372:
case 4044:
case 3179:
case 1959:
case 2418:
case 4003:
case 1609:
case 3005:
case 3034:
case 493:
case 609:
case 2263:
case 727:
case 593:
case 1100:
case 3833:
case 2908:
case 3670:
case 1544:
case 2658:
case 3156:
case 3520:
case 2588:
case 1983:
case 342:
case 3845:
case 3082:
case 1492:
case 1890:
case 3057:
case 2587:
case 3785:
case 3865:
case 1823:
case 1145:
case 3273:
case 2682:
case 2169:
case 2717:
case 2907:
case 2991:
case 3515:
case 518:
case 3058:
case 3286:
case 616:
case 2436:
case 1564:
case 635:
case 3800:
case 143:
case 285:
case 3402:
case 2634:
case 712:
case 3:
case 2243:
case 1013:
case 3912:
case 173:
case 963:
case 1879:
case 2736:
case 3229:
case 137:
case 2376:
case 3699:
case 3397:
case 2204:
case 4038:
case 3323:
case 1365:
case 3067:
case 2542:
case 2289:
case 3166:
case 634:
case 2425:
case 284:
case 3314:
case 2211:
case 3048:
case 1300:
case 3356:
case 2725:
case 1191:
case 1969:
case 3572:
case 979:
case 1538:
case 2253:
case 2945:
case 169:
case 2226:
case 3292:
case 3808:
case 426:
case 387:
case 1801:
case 1897:
case 853:
case 2269:
case 3087:
case 1401:
case 534:
case 1953:
case 3173:
case 1245:
case 3408:
case 1603:
case 1233:
case 292:
case 3620:
case 92:
case 1926:
case 3570:
case 1746:
case 2688:
case 274:
case 989:
case 2825:
case 722:
case 2135:
case 1911:
case 3839:
case 910:
case 3708:
case 377:
case 434:
case 743:
case 516:
case 2817:
case 3885:
case 535:
case 1723:
case 3042:
case 261:
case 1756:
case 1616:
case 3700:
case 4071:
case 618:
case 3266:
case 1654:
case 3802:
case 3298:
case 2836:
case 1207:
case 1291:
case 2072:
case 737:
case 1571:
case 398:
case 1637:
case 1423:
case 1532:
case 2126:
case 2550:
case 3578:
case 1339:
case 1680:
case 45:
case 4048:
case 2621:
case 2532:
case 1550:
case 2339:
case 2423:
case 3506:
case 1836:
case 2779:
case 4067:
case 283:
case 1031:
case 145:
case 1072:
case 1363:
case 3038:
case 3325:
case 2291:
case 175:
case 4050:
case 971:
case 2584:
case 965:
case 2935:
case 487:
case 326:
case 1817:
case 1662:
case 1189:
case 2943:
case 2723:
case 854:
case 3929:
case 1540:
case 3524:
case 698:
case 1104:
case 1135:
case 2911:
case 5:
case 3110:
case 650:
case 700:
case 3783:
case 1825:
case 3863:
case 3275:
case 144:
case 2989:
case 3681:
case 192:
case 2233:
case 1688:
case 3064:
case 1093:
case 318:
case 3483:
case 2497:
case 2401:
case 855:
case 3317:
case 3759:
case 2603:
case 2385:
case 4:
case 784:
case 744:
case 3876:
case 1078:
case 598:
case 6:
case 2107:
case 2969:
case 4042:
case 3763:
case 1253:
case 807:
case 550:
case 2538:
case 1425:
case 2041:
case 1494:
case 3084:
case 335:
case 3218:
case 2300:
case 3859:
case 3112:
case 2155:
case 1289:
case 1349:
case 1542:
case 687:
case 533:
case 2308:
case 3210:
case 2024:
case 1235:
case 902:
case 1417:
case 1243:
case 1605:
case 1383:
case 2879:
case 1736:
case 577:
case 328:
case 956:
case 2814:
case 334:
case 1070:
case 243:
case 2051:
case 185:
case 1436:
case 2856:
case 2145:
case 3998:
case 70:
case 2530:
case 1552:
case 1169:
case 761:
case 1907:
case 3849:
case 433:
case 775:
case 2355:
case 3789:
case 871:
case 3869:
case 2983:
case 3426:
case 858:
case 3519:
case 1658:
case 2976:
case 2100:
case 1908:
case 336:
case 3997:
case 954:
case 3651:
case 1418:
case 3753:
case 2609:
case 3613:
case 1875:
case 4088:
case 3946:
case 1640:
case 841:
case 3695:
case 2792:
case 3726:
case 2239:
case 1562:
case 1369:
case 501:
case 3404:
case 413:
case 2345:
case 776:
case 2773:
case 1159:
case 2684:
case 2333:
case 2516:
case 151:
case 2554:
case 4080:
case 2866:
case 1648:
case 178:
case 186:
case 2786:
case 3443:
case 482:
case 1077:
case 2729:
case 2202:
case 2486:
case 3375:
case 148:
case 46:
case 2537:
case 3704:
case 3914:
case 3735:
case 2671:
case 694:
case 1650:
case 217:
case 3606:
case 513:
case 786:
case 2873:
case 1712:
case 1652:
case 1687:
case 1249:
case 2019:
case 1582:
case 4034:
case 4005:
case 1557:
case 188:
case 2081:
case 3044:
case 4060:
case 2886:
case 1020:
case 325:
case 2200:
case 542:
case 2664:
case 66:
case 2498:
case 146:
case 89:
case 2466:
case 1534:
case 3194:
case 2798:
case 2829:
case 1985:
case 572:
case 1353:
case 748:
case 1326:
case 682:
case 232:
case 2074:
case 1560:
case 1259:
case 1547:
case 2963:
case 3769:
case 324:
case 3811:
case 495:
case 460:
case 3016:
case 3054:
case 1283:
case 1775:
case 3136:
case 1596:
case 4047:
case 560:
case 3021:
case 2208:
case 3826:
case 1276:
case 3469:
case 4068:
case 1028:
case 1304:
case 2511:
case 3995:
case 3924:
case 1940:
case 665:
case 3744:
case 2781:
case 690:
case 32:
case 2659:
case 2719:
case 2167:
case 2357:
case 2589:
case 556:
case 2242:
case 1012:
case 2474:
case 152:
case 1608:
case 2419:
case 2526:
case 1958:
case 310:
case 2774:
case 1171:
case 3951:
case 3601:
case 2305:
case 2683:
case 389:
case 2481:
case 1822:
case 3444:
case 933:
case 1238:
case 1420:
case 2971:
case 2368:
case 842:
case 664:
case 3754:
case 49:
case 3906:
case 3716:
case 3293:
case 1600:
case 1264:
case 2932:
case 3069:
case 2252:
case 1230:
case 1428:
case 3215:
case 2649:
case 950:
case 2984:
case 1948:
case 2543:
case 3377:
case 872:
case 3679:
case 894:
case 3322:
case 59:
case 1967:
case 139:
case 3416:
case 31:
case 1284:
case 3816:
case 1344:
case 1018:
case 3566:
case 2388:
case 86:
case 2142:
case 4091:
case 1555:
case 801:
case 1303:
case 1685:
case 3837:
case 2092:
case 3821:
case 3278:
case 2250:
case 1232:
case 464:
case 3172:
case 2930:
case 1987:
case 1138:
case 363:
case 3053:
case 1591:
case 1422:
case 3270:
case 1164:
case 1316:
case 681:
case 1533:
case 2881:
case 1477:
case 1354:
case 441:
case 706:
case 558:
case 3115:
case 3590:
case 2152:
case 590:
case 571:
case 1010:
case 1321:
case 2240:
case 471:
case 2874:
case 1337:
case 465:
case 3035:
case 3004:
case 3328:
case 1639:
case 379:
case 4045:
case 2461:
case 1722:
case 1942:
case 2029:
case 767:
case 877:
case 780:
case 1962:
case 1025:
case 3579:
case 2441:
case 4065:
case 1094:
case 3484:
case 191:
case 3732:
case 960:
case 2604:
case 3771:
case 2260:
case 2954:
case 1565:
case 3673:
case 3432:
case 1815:
case 3471:
case 2282:
case 654:
case 2921:
case 1980:
case 2937:
case 3686:
case 2188:
case 1144:
case 3556:
case 2741:
case 3864:
case 203:
case 1831:
case 507:
case 898:
case 2653:
case 3919:
case 2713:
case 2296:
case 3222:
case 1470:
case 466:
case 2576:
case 3692:
case 2944:
case 2626:
case 74:
case 1137:
case 2559:
case 2387:
case 2247:
case 566:
case 2162:
case 3315:
case 2424:
case 668:
case 2268:
case 1154:
case 3974:
case 1364:
case 211:
case 407:
case 1116:
case 14:
case 1947:
case 3809:
case 3738:
case 2813:
case 1731:
case 2134:
case 2105:
case 757:
case 2563:
case 1727:
case 1968:
case 2824:
case 729:
case 468:
case 330:
case 3378:
case 2350:
case 8:
case 982:
case 2182:
case 2023:
case 1203:
case 3690:
case 1996:
case 96:
case 1472:
case 2014:
case 1244:
case 3438:
case 1633:
case 4039:
case 2056:
case 901:
case 2851:
case 105:
case 3698:
case 3122:
case 3464:
case 1493:
case 353:
case 1502:
case 3177:
case 1982:
case 887:
case 2280:
case 1237:
case 1221:
case 3871:
case 1415:
case 2097:
case 3430:
case 454:
case 2806:
case 1715:
case 85:
case 1655:
case 554:
case 3059:
case 2046:
case 1793:
case 3764:
case 2841:
case 740:
case 2168:
case 1841:
case 121:
case 1358:
case 925:
case 3999:
case 204:
case 3161:
case 1046:
case 2793:
case 3848:
case 2960:
case 1168:
case 2655:
case 2905:
case 2934:
case 835:
case 3517:
case 3752:
case 2585:
case 993:
case 816:
case 1147:
case 307:
case 1280:
case 3395:
case 2237:
case 1806:
case 3487:
case 3850:
case 3452:
case 219:
case 3313:
case 1196:
case 2691:
case 3281:
case 27:
case 2472:
case 1014:
case 2244:
case 3341:
case 2870:
case 3000:
case 1851:
case 1348:
case 2431:
case 2427:
case 938:
case 1288:
case 1023:
case 1669:
case 711:
case 1157:
case 53:
case 199:
case 2996:
case 834:
case 3922:
case 43:
case 1895:
case 2968:
case 3840:
case 3274:
case 1160:
case 1824:
case 2539:
case 703:
case 3306:
case 2772:
case 24:
case 3675:
case 2727:
case 2731:
case 1268:
case 936:
case 2154:
case 354:
case 799:
case 1611:
case 28:
case 3618:
case 4076:
case 63:
case 2364:
case 3261:
case 111:
case 826:
case 1559:
case 3440:
case 1162:
case 1424:
case 1495:
case 1689:
case 1576:
case 1944:
case 1626:
case 2508:
case 257:
case 553:
case 262:
case 2137:
case 1180:
case 1724:
case 3740:
case 2827:
case 103:
case 1583:
case 3002:
case 2872:
case 3458:
case 1296:
case 2470:
case 1653:
case 229:
case 1937:
case 1188:
case 2144:
case 2893:
case 355:
case 240:
case 2478:
case 3852:
case 1406:
case 818:
case 1257:
case 1282:
case 1916:
case 270:
case 3039:
case 2962:
case 1643:
case 909:
case 2025:
case 2338:
case 663:
case 3213:
case 2722:
case 3796:
case 2209:
case 3625:
case 3468:
case 1380:
case 2337:
case 2321:
case 1240:
case 2639:
case 3447:
case 1362:
case 2545:
case 1938:
case 2130:
case 1152:
case 131:
case 1086:
case 61:
case 1258:
case 3768:
case 3251:
case 2477:
case 3888:
case 2602:
case 2952:
case 1930:
case 2987:
case 3636:
case 3734:
case 3760:
case 42:
case 1092:
case 3457:
case 3206:
case 3993:
case 1250:
case 3757:
case 2555:
case 3782:
case 3862:
case 3617:
case 1142:
case 3460:
case 2303:
case 824:
case 1267:
case 3512:
case 2344:
case 2284:
case 3381:
case 928:
case 356:
case 410:
case 3405:
case 934:
case 3834:
case 3805:
case 1543:
case 2075:
case 689:
case 1984:
case 2899:
case 2728:
case 3462:
case 1140:
case 3124:
case 3780:
case 1504:
case 3195:
case 449:
case 1252:
case 836:
case 2428:
case 549:
case 479:
case 4043:
case 815:
case 1649:
case 3045:
case 3033:
case 1368:
case 926:
case 390:
case 3978:
case 1158:
case 62:
case 2950:
case 2600:
case 2877:
case 1098:
case 1305:
case 1683:
case 3896:
case 520:
case 1481:
case 3091:
case 2132:
case 3970:
case 1150:
case 1526:
case 252:
case 2608:
case 1419:
case 3106:
case 1360:
case 1167:
case 51:
case 3847:
case 4053:
case 814:
case 731:
case 1242:
case 1474:
case 1589:
case 1382:
case 1148:
case 3868:
case 1511:
case 364:
case 918:
case 1781:
case 2184:
case 2720:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744786801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,];
var gg_b = "1744786801/";

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
