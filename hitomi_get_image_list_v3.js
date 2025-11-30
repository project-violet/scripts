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
case 3677:
case 2743:
case 187:
case 2249:
case 4084:
case 1247:
case 3924:
case 2242:
case 2456:
case 739:
case 3148:
case 52:
case 2726:
case 3586:
case 1236:
case 649:
case 3911:
case 728:
case 908:
case 1440:
case 1086:
case 93:
case 1697:
case 130:
case 4058:
case 3356:
case 2699:
case 3168:
case 2481:
case 3043:
case 789:
case 1821:
case 474:
case 3661:
case 550:
case 3551:
case 3922:
case 3113:
case 3026:
case 2244:
case 137:
case 153:
case 3291:
case 4070:
case 4089:
case 1563:
case 3641:
case 476:
case 3607:
case 3655:
case 339:
case 3063:
case 2694:
case 1271:
case 1115:
case 2935:
case 1319:
case 3210:
case 1814:
case 583:
case 1045:
case 2196:
case 2317:
case 810:
case 3209:
case 3703:
case 3435:
case 1300:
case 3125:
case 1166:
case 3516:
case 400:
case 3322:
case 197:
case 916:
case 2108:
case 3202:
case 4014:
case 3824:
case 144:
case 2752:
case 3238:
case 2422:
case 1882:
case 84:
case 2073:
case 3811:
case 2575:
case 4:
case 2139:
case 721:
case 901:
case 1384:
case 2429:
case 2253:
case 1757:
case 2887:
case 1137:
case 1644:
case 3183:
case 878:
case 321:
case 262:
case 1292:
case 1559:
case 3487:
case 2505:
case 2557:
case 3324:
case 4019:
case 799:
case 2667:
case 1299:
case 2411:
case 3390:
case 1793:
case 3204:
case 4012:
case 2297:
case 1389:
case 1370:
case 2754:
case 3773:
case 3279:
case 2647:
case 2134:
case 1649:
case 1028:
case 190:
case 2178:
case 3059:
case 593:
case 1382:
case 425:
case 1185:
case 1642:
case 1036:
case 1932:
case 64:
case 1396:
case 2791:
case 538:
case 2042:
case 3657:
case 903:
case 939:
case 1001:
case 1939:
case 2112:
case 2923:
case 3218:
case 2049:
case 2062:
case 2966:
case 555:
case 3764:
case 4034:
case 2710:
case 102:
case 1603:
case 1950:
case 4078:
case 2069:
case 1934:
case 1448:
case 33:
case 2044:
case 3742:
case 308:
case 3160:
case 1978:
case 1896:
case 3243:
case 2114:
case 3749:
case 135:
case 2985:
case 989:
case 1251:
case 78:
case 3876:
case 4032:
case 2121:
case 3675:
case 1071:
case 3769:
case 4039:
case 1591:
case 2406:
case 2846:
case 195:
case 1832:
case 3002:
case 2823:
case 2837:
case 420:
case 1187:
case 2498:
case 1483:
case 716:
case 271:
case 3009:
case 1334:
case 1574:
case 3931:
case 1094:
case 1839:
case 39:
case 2170:
case 2189:
case 2507:
case 2555:
case 2541:
case 1216:
case 2772:
case 2053:
case 3074:
case 1509:
case 921:
case 701:
case 2295:
case 1502:
case 2273:
case 3398:
case 2779:
case 2337:
case 581:
case 2097:
case 2184:
case 1099:
case 1834:
case 1580:
case 1339:
case 1707:
case 1741:
case 2346:
case 1425:
case 1135:
case 2709:
case 482:
case 1996:
case 1878:
case 2203:
case 301:
case 316:
case 151:
case 3423:
case 3592:
case 3753:
case 3898:
case 3072:
case 1308:
case 3127:
case 79:
case 1761:
case 3080:
case 3446:
case 2100:
case 2738:
case 634:
case 2482:
case 1528:
case 3858:
case 668:
case 3662:
case 1030:
case 819:
case 3793:
case 3800:
case 1390:
case 3921:
case 1829:
case 286:
case 1324:
case 1487:
case 3292:
case 3559:
case 121:
case 2827:
case 3669:
case 2716:
case 3185:
case 2960:
case 1272:
case 636:
case 1059:
case 2277:
case 1795:
case 3028:
case 1956:
case 3370:
case 3530:
case 3389:
case 1279:
case 284:
case 1280:
case 42:
case 2075:
case 2610:
case 2484:
case 790:
case 2595:
case 236:
case 1824:
case 344:
case 1202:
case 1088:
case 576:
case 2333:
case 2327:
case 2255:
case 483:
case 397:
case 1516:
case 1125:
case 4056:
case 3300:
case 1890:
case 3137:
case 3016:
case 3123:
case 450:
case 3757:
case 3705:
case 3427:
case 346:
case 2728:
case 2400:
case 2261:
case 1054:
case 3588:
case 3958:
case 3653:
case 2674:
case 2419:
case 902:
case 722:
case 1417:
case 128:
case 61:
case 1113:
case 2412:
case 2176:
case 1661:
case 2933:
case 730:
case 1929:
case 1043:
case 296:
case 500:
case 247:
case 2860:
case 2602:
case 4024:
case 787:
case 3319:
case 1210:
case 3984:
case 1381:
case 3271:
case 3115:
case 3312:
case 985:
case 3526:
case 103:
case 1641:
case 1655:
case 1607:
case 2672:
case 559:
case 2765:
case 780:
case 3321:
case 2414:
case 2680:
case 3201:
case 1990:
case 3247:
case 1018:
case 2751:
case 1356:
case 1168:
case 2604:
case 189:
case 935:
case 4022:
case 3440:
case 3982:
case 2360:
case 322:
case 261:
case 3314:
case 737:
case 3267:
case 3819:
case 101:
case 3996:
case 3092:
case 3572:
case 3332:
case 3135:
case 455:
case 466:
case 3755:
case 3707:
case 114:
case 2408:
case 2720:
case 3504:
case 4031:
case 464:
case 2325:
case 663:
case 2077:
case 2913:
case 81:
case 438:
case 2432:
case 3308:
case 1072:
case 1976:
case 1133:
case 2883:
case 1592:
case 1259:
case 2257:
case 2205:
case 2129:
case 861:
case 2663:
case 3839:
case 3094:
case 751:
case 2792:
case 2968:
case 2041:
case 263:
case 3483:
case 2055:
case 2007:
case 3187:
case 2799:
case 3538:
case 2293:
case 990:
case 395:
case 2275:
case 1797:
case 3808:
case 1398:
case 1254:
case 1038:
case 491:
case 3850:
case 3777:
case 2434:
case 3509:
case 2190:
case 1594:
case 2626:
case 488:
case 1749:
case 3695:
case 2564:
case 3896:
case 2747:
case 1160:
case 3673:
case 3265:
case 1226:
case 13:
case 1571:
case 1331:
case 2736:
case 3934:
case 702:
case 2368:
case 922:
case 1091:
case 2767:
case 785:
case 2544:
case 2813:
case 3591:
case 245:
case 272:
case 868:
case 3071:
case 987:
case 3468:
case 1010:
case 1675:
case 2983:
case 520:
case 1876:
case 1998:
case 1693:
case 431:
case 3245:
case 1218:
case 645:
case 2562:
case 1831:
case 2181:
case 3001:
case 2652:
case 1567:
case 1744:
case 1605:
case 527:
case 2659:
case 3036:
case 2569:
case 3117:
case 953:
case 3067:
case 55:
case 1376:
case 302:
case 3603:
case 2496:
case 2313:
case 498:
case 2549:
case 1764:
case 175:
case 142:
case 1240:
case 3997:
case 3706:
case 629:
case 1163:
case 748:
case 2904:
case 3689:
case 3670:
case 3015:
case 2462:
case 3342:
case 1611:
case 510:
case 666:
case 3682:
case 291:
case 1143:
case 3864:
case 3369:
case 2972:
case 4007:
case 664:
case 463:
case 3165:
case 943:
case 638:
case 1690:
case 912:
case 3548:
case 3186:
case 2902:
case 2006:
case 4077:
case 3344:
case 238:
case 1941:
case 3849:
case 1955:
case 1907:
case 2391:
case 1796:
case 578:
case 3410:
case 1068:
case 1118:
case 229:
case 893:
case 688:
case 3658:
case 3953:
case 3600:
case 3491:
case 691:
case 1629:
case 255:
case 266:
case 3364:
case 517:
case 3869:
case 348:
case 2633:
case 1681:
case 169:
case 3438:
case 2222:
case 1355:
case 3128:
case 298:
case 1341:
case 3583:
case 1159:
case 2157:
case 2105:
case 2723:
case 3619:
case 2453:
case 3474:
case 3085:
case 2578:
case 2338:
case 3964:
case 2766:
case 1361:
case 1083:
case 2872:
case 2098:
case 3409:
case 631:
case 760:
case 833:
case 1750:
case 2534:
case 2374:
case 367:
case 1877:
case 2660:
case 2508:
case 231:
case 2802:
case 1734:
case 2550:
case 767:
case 3942:
case 3480:
case 3479:
case 472:
case 1656:
case 1566:
case 3525:
case 3023:
case 3397:
case 1807:
case 3472:
case 1841:
case 883:
case 698:
case 1025:
case 2380:
case 3066:
case 3962:
case 2640:
case 1492:
case 1523:
case 3287:
case 341:
case 1377:
case 1537:
case 2193:
case 2838:
case 1188:
case 1861:
case 3969:
case 2175:
case 2211:
case 681:
case 3560:
case 2514:
case 1110:
case 3215:
case 2826:
case 549:
case 1040:
case 3639:
case 2717:
case 2863:
case 1191:
case 283:
case 62:
case 118:
case 1213:
case 4093:
case 2959:
case 3781:
case 1060:
case 2276:
case 1712:
case 4075:
case 2521:
case 436:
case 1957:
case 898:
case 484:
case 22:
case 2231:
case 1451:
case 2512:
case 2326:
case 1445:
case 2818:
case 1698:
case 343:
case 2988:
case 4057:
case 3463:
case 2519:
case 881:
case 3167:
case 3756:
case 3678:
case 1465:
case 3017:
case 1248:
case 3995:
case 97:
case 3634:
case 573:
case 3147:
case 3101:
case 1714:
case 106:
case 2648:
case 941:
case 1027:
case 2388:
case 461:
case 1393:
case 3803:
case 2926:
case 3454:
case 3724:
case 2584:
case 2830:
case 2495:
case 3711:
case 3488:
case 2558:
case 1104:
case 2852:
case 829:
case 2500:
case 960:
case 2787:
case 3395:
case 1805:
case 440:
case 1606:
case 3373:
case 2354:
case 3533:
case 866:
case 1789:
case 1283:
case 3459:
case 3223:
case 765:
case 3729:
case 756:
case 2918:
case 2090:
case 2330:
case 2570:
case 494:
case 3246:
case 1676:
case 447:
case 2888:
case 3120:
case 3430:
case 496:
case 1357:
case 1784:
case 2359:
case 3696:
case 1102:
case 2854:
case 754:
case 2141:
case 2107:
case 2403:
case 2735:
case 1225:
case 1109:
case 3807:
case 3855:
case 1949:
case 1023:
case 1116:
case 3566:
case 911:
case 2399:
case 3656:
case 2820:
case 1046:
case 1942:
case 2195:
case 44:
case 1480:
case 4064:
case 2392:
case 2477:
case 3734:
case 96:
case 2032:
case 904:
case 1404:
case 1621:
case 3499:
case 2967:
case 769:
case 2282:
case 292:
case 2050:
case 141:
case 1287:
case 3492:
case 4044:
case 3377:
case 726:
case 800:
case 1853:
case 3025:
case 2270:
case 2783:
case 1066:
case 1619:
case 692:
case 326:
case 2892:
case 2078:
case 4069:
case 1583:
case 2617:
case 2461:
case 3341:
case 417:
case 1612:
case 4062:
case 2258:
case 2394:
case 807:
case 3732:
case 2899:
case 859:
case 167:
case 3420:
case 2284:
case 1353:
case 3750:
case 2971:
case 324:
case 4042:
case 1409:
case 2407:
case 2441:
case 2103:
case 2994:
case 3068:
case 1410:
case 1684:
case 3941:
case 3907:
case 3955:
case 1849:
case 632:
case 2635:
case 205:
case 918:
case 1842:
case 3471:
case 148:
case 1869:
case 3961:
case 1364:
case 282:
case 713:
case 3048:
case 3629:
case 775:
case 2867:
case 742:
case 2713:
case 1600:
case 1953:
case 1862:
case 1658:
case 1776:
case 3622:
case 977:
case 3118:
case 1151:
case 2336:
case 1731:
case 1670:
case 1689:
case 3467:
case 2301:
case 4053:
case 313:
case 65:
case 1349:
case 1997:
case 970:
case 3690:
case 627:
case 3126:
case 3977:
case 2748:
case 3436:
case 3260:
case 232:
case 3624:
case 874:
case 2367:
case 3447:
case 1303:
case 704:
case 76:
case 2511:
case 1452:
case 3875:
case 1246:
case 2457:
case 2405:
case 2239:
case 711:
case 536:
case 276:
case 3587:
case 1223:
case 820:
case 2070:
case 2089:
case 1194:
case 2615:
case 1087:
case 706:
case 2328:
case 2208:
case 1873:
case 274:
case 2986:
case 2082:
case 3784:
case 568:
case 3102:
case 449:
case 1696:
case 3357:
case 1430:
case 3305:
case 1895:
case 2524:
case 534:
case 832:
case 3180:
case 154:
case 2000:
case 2234:
case 586:
case 2965:
case 3416:
case 805:
case 1803:
case 1790:
case 3027:
case 415:
case 1285:
case 674:
case 473:
case 306:
case 3770:
case 3789:
case 1533:
case 3283:
case 1527:
case 2945:
case 1192:
case 3857:
case 1395:
case 882:
case 584:
case 165:
case 1199:
case 304:
case 3631:
case 676:
case 3104:
case 1711:
case 2316:
case 2493:
case 2828:
case 225:
case 718:
case 3517:
case 2169:
case 207:
case 540:
case 3451:
case 2365:
case 3721:
case 3714:
case 561:
case 6:
case 777:
case 1147:
case 1634:
case 1443:
case 1995:
case 2685:
case 975:
case 3248:
case 1136:
case 1017:
case 3465:
case 1678:
case 4003:
case 1426:
case 462:
case 2345:
case 770:
case 1171:
case 1215:
case 2:
case 596:
case 3110:
case 2021:
case 4095:
case 2296:
case 2164:
case 1560:
case 3905:
case 892:
case 594:
case 1418:
case 1781:
case 2386:
case 547:
case 2144:
case 3213:
case 2623:
case 200:
case 1540:
case 318:
case 1639:
case 607:
case 1317:
case 1196:
case 518:
case 1264:
case 2045:
case 2814:
case 1620:
case 2319:
case 1935:
case 919:
case 3609:
case 2984:
case 740:
case 2271:
case 687:
case 3786:
case 2526:
case 2312:
case 2563:
case 2958:
case 761:
case 3674:
case 577:
case 3419:
case 2900:
case 2065:
case 1244:
case 71:
case 3927:
case 622:
case 1481:
case 1718:
case 3745:
case 3604:
case 2970:
case 31:
case 3131:
case 653:
case 454:
case 2697:
case 796:
case 2518:
case 3360:
case 1763:
case 2982:
case 2440:
case 222:
case 361:
case 851:
case 115:
case 2267:
case 2819:
case 2236:
case 4035:
case 747:
case 3414:
case 2247:
case 2201:
case 287:
case 1249:
case 2460:
case 3340:
case 963:
case 3057:
case 3005:
case 2914:
case 504:
case 802:
case 56:
case 644:
case 2382:
case 3277:
case 290:
case 2649:
case 736:
case 511:
case 2028:
case 1134:
case 1647:
case 384:
case 697:
case 2370:
case 2530:
case 2389:
case 1754:
case 1297:
case 3482:
case 2662:
case 2800:
case 2552:
case 506:
case 1667:
case 386:
case 3470:
case 1557:
case 3489:
case 885:
case 1003:
case 2292:
case 734:
case 2123:
case 2912:
case 2644:
case 2137:
case 368:
case 2757:
case 2705:
case 1429:
case 2384:
case 858:
case 334:
case 2889:
case 2870:
case 246:
case 1095:
case 3728:
case 2919:
case 1917:
case 1132:
case 1593:
case 2588:
case 479:
case 2220:
case 3484:
case 3075:
case 244:
case 3595:
case 1108:
case 784:
case 3327:
case 3573:
case 1730:
case 3241:
case 297:
case 2166:
case 690:
case 3813:
case 4037:
case 3544:
case 1406:
case 3767:
case 258:
case 372:
case 345:
case 2071:
case 3348:
case 1121:
case 3983:
case 1064:
case 2251:
case 2510:
case 1985:
case 602:
case 235:
case 1114:
case 3747:
case 2978:
case 2896:
case 3701:
case 3564:
case 2673:
case 3654:
case 575:
case 91:
case 844:
case 110:
case 1616:
case 441:
case 2265:
case 3736:
case 1815:
case 2448:
case 961:
case 2934:
case 3542:
case 4085:
case 2286:
case 202:
case 2603:
case 1710:
case 3496:
case 3549:
case 996:
case 117:
case 890:
case 3925:
case 1476:
case 1628:
case 1112:
case 1937:
case 3181:
case 947:
case 3562:
case 3652:
case 3868:
case 1119:
case 285:
case 1042:
case 178:
case 772:
case 2413:
case 2396:
case 745:
case 1791:
case 2036:
case 830:
case 2504:
case 1366:
case 3077:
case 3432:
case 3618:
case 2228:
case 3597:
case 2308:
case 1774:
case 251:
case 695:
case 3439:
case 763:
case 3257:
case 3205:
case 524:
case 3129:
case 1686:
case 2572:
case 2332:
case 569:
case 3794:
case 934:
case 1346:
case 2755:
case 968:
case 2707:
case 2339:
case 2580:
case 1184:
case 2834:
case 3408:
case 1577:
case 3450:
case 3720:
case 3383:
case 3061:
case 1779:
case 1780:
case 2808:
case 2850:
case 3643:
case 1295:
case 3434:
case 880:
case 2509:
case 4015:
case 1665:
case 3626:
case 2216:
case 1555:
case 1507:
case 1189:
case 1170:
case 3553:
case 2574:
case 2334:
case 171:
case 3041:
case 1651:
case 2378:
case 1645:
case 1704:
case 3275:
case 3111:
case 2020:
case 1385:
case 3422:
case 3593:
case 2054:
case 3073:
case 1261:
case 3575:
case 3335:
case 1728:
case 3095:
case 1458:
case 823:
case 1691:
case 2274:
case 3429:
case 168:
case 4040:
case 3887:
case 2703:
case 2890:
case 2209:
case 2125:
case 2322:
case 83:
case 1207:
case 1255:
case 3730:
case 1573:
case 1333:
case 1595:
case 1610:
case 2280:
case 184:
case 3754:
case 2773:
case 2052:
case 3647:
case 2795:
case 1277:
case 2059:
case 3178:
case 2272:
case 3636:
case 3490:
case 1005:
case 1057:
case 1198:
case 2183:
case 221:
case 3003:
case 362:
case 2324:
case 1489:
case 3557:
case 186:
case 2829:
case 3667:
case 852:
case 2390:
case 3788:
case 3411:
case 699:
case 2204:
case 2822:
case 1940:
case 1482:
case 3763:
case 1360:
case 816:
case 3269:
case 3817:
case 3987:
case 289:
case 11:
case 3262:
case 2881:
case 1745:
case 3699:
case 1421:
case 2356:
case 1751:
case 543:
case 814:
case 94:
case 3743:
case 2990:
case 603:
case 46:
case 1680:
case 3242:
case 2924:
case 3726:
case 801:
case 1765:
case 140:
case 2607:
case 978:
case 203:
case 239:
case 3694:
case 194:
case 2210:
case 3935:
case 3264:
case 147:
case 3317:
case 2043:
case 196:
case 3481:
case 2929:
case 2661:
case 1933:
case 1176:
case 1927:
case 2551:
case 1638:
case 2922:
case 773:
case 2417:
case 1840:
case 1419:
case 3507:
case 3555:
case 1478:
case 442:
case 3772:
case 3866:
case 839:
case 1190:
case 2485:
case 1434:
case 601:
case 1124:
case 3295:
case 3779:
case 2254:
case 3273:
case 3846:
case 2797:
case 1275:
case 3385:
case 3182:
case 3561:
case 3704:
case 2002:
case 3651:
case 1293:
case 1799:
case 3645:
case 1055:
case 3498:
case 163:
case 1041:
case 1553:
case 2009:
case 1792:
case 3170:
case 29:
case 1439:
case 216:
case 1205:
case 2437:
case 3774:
case 567:
case 2423:
case 2259:
case 771:
case 2133:
case 1883:
case 2976:
case 2898:
case 1618:
case 69:
case 1122:
case 2446:
case 3158:
case 1325:
case 2080:
case 3366:
case 3738:
case 2252:
case 3337:
case 1720:
case 3323:
case 1408:
case 214:
case 4048:
case 201:
case 3709:
case 1630:
case 3062:
case 1925:
case 2547:
case 2764:
case 63:
case 1549:
case 1496:
case 1771:
case 1848:
case 4083:
case 252:
case 2657:
case 3042:
case 821:
case 2744:
case 1652:
case 1868:
case 3315:
case 3112:
case 3923:
case 3049:
case 74:
case 3628:
case 2218:
case 3064:
case 2693:
case 2876:
case 1983:
case 2675:
case 652:
case 3431:
case 2769:
case 778:
case 1767:
case 1368:
case 4025:
case 23:
case 3815:
case 57:
case 2226:
case 973:
case 1654:
case 2160:
case 1747:
case 2749:
case 3114:
case 2243:
case 1633:
case 401:
case 3713:
case 2048:
case 675:
case 642:
case 414:
case 613:
case 3531:
case 35:
case 1281:
case 129:
case 502:
case 2118:
case 804:
case 10:
case 164:
case 732:
case 1909:
case 3801:
case 2796:
case 2907:
case 2955:
case 1464:
case 1006:
case 1902:
case 3836:
case 1715:
case 2471:
case 416:
case 2690:
case 4009:
case 1256:
case 49:
case 1980:
case 705:
case 925:
case 320:
case 1076:
case 1972:
case 1596:
case 4002:
case 2143:
case 907:
case 1810:
case 2447:
case 191:
case 4038:
case 3096:
case 3576:
case 3336:
case 1904:
case 535:
case 782:
case 2467:
case 1891:
case 2240:
case 1469:
case 3687:
case 242:
case 2546:
case 1175:
case 2499:
case 626:
case 1372:
case 1497:
case 2861:
case 3282:
case 2377:
case 669:
case 1379:
case 43:
case 3783:
case 3270:
case 2025:
case 818:
case 2841:
case 624:
case 2807:
case 423:
case 1304:
case 3894:
case 3039:
case 1290:
case 3901:
case 2656:
case 3947:
case 3399:
case 3820:
case 1224:
case 3195:
case 131:
case 1802:
case 3392:
case 2154:
case 3173:
case 1508:
case 551:
case 2750:
case 1374:
case 1534:
case 2420:
case 1880:
case 2130:
case 2708:
case 1910:
case 1872:
case 3407:
case 1766:
case 1338:
case 1578:
case 870:
case 3103:
case 1453:
case 1737:
case 3320:
case 1723:
case 226:
case 1302:
case 181:
case 3892:
case 2227:
case 2739:
case 2233:
case 1746:
case 3461:
case 2732:
case 2681:
case 974:
case 3394:
case 2152:
case 3034:
case 3012:
case 3916:
case 109:
case 133:
case 157:
case 2714:
case 4030:
case 2248:
case 3019:
case 1954:
case 7:
case 530:
case 3886:
case 677:
case 700:
case 920:
case 2975:
case 325:
case 3740:
case 2993:
case 826:
case 1683:
case 1326:
case 3365:
case 1512:
case 2451:
case 618:
case 12:
case 869:
case 932:
case 2905:
case 3646:
case 707:
case 2712:
case 3386:
case 2060:
case 300:
case 905:
case 3637:
case 3144:
case 2719:
case 183:
case 218:
case 1056:
case 1863:
case 1717:
case 2040:
case 1318:
case 1826:
case 3865:
case 1930:
case 3666:
case 982:
case 3556:
case 2110:
case 1514:
case 670:
case 3164:
case 537:
case 3296:
case 95:
case 4054:
case 2109:
case 3070:
case 3089:
case 4026:
case 1735:
case 1107:
case 428:
case 1141:
case 3986:
case 3082:
case 1854:
case 606:
case 2102:
case 2784:
case 4043:
case 2357:
case 1011:
case 546:
case 2700:
case 2893:
case 597:
case 1161:
case 2428:
case 2758:
case 1582:
case 2875:
case 3511:
case 4063:
case 3239:
case 3457:
case 1330:
case 3405:
case 3733:
case 1090:
case 1918:
case 403:
case 376:
case 66:
case 439:
case 2770:
case 2789:
case 590:
case 2606:
case 3945:
case 1859:
case 2857:
case 776:
case 1787:
case 3084:
case 26:
case 2104:
case 1963:
case 2631:
case 204:
case 3316:
case 3197:
case 4018:
case 193:
case 1830:
case 2180:
case 3234:
case 3000:
case 1473:
case 489:
case 1926:
case 1177:
case 2393:
case 2033:
case 2172:
case 2535:
case 1029:
case 206:
case 3578:
case 1103:
case 3872:
case 3098:
case 4036:
case 1441:
case 1407:
case 485:
case 2235:
case 3910:
case 2409:
case 4047:
case 1284:
case 516:
case 4001:
case 267:
case 1200:
case 3991:
case 641:
case 3309:
case 1899:
case 1258:
case 2438:
case 3222:
case 3746:
case 398:
case 2128:
case 2897:
case 1461:
case 1617:
case 1598:
case 402:
case 1078:
case 1892:
case 3302:
case 2085:
case 812:
case 3453:
case 2474:
case 3723:
case 1320:
case 2962:
case 3539:
case 3380:
case 2853:
case 3874:
case 3640:
case 241:
case 879:
case 3838:
case 1050:
case 3532:
case 2969:
case 1282:
case 3497:
case 435:
case 1967:
case 3211:
case 3175:
case 3508:
case 1936:
case 3550:
case 1195:
case 2942:
case 2046:
case 1820:
case 1901:
case 3809:
case 1399:
case 4071:
case 2525:
case 667:
case 1894:
case 260:
case 2949:
case 3810:
case 4020:
case 1367:
case 495:
case 3596:
case 3972:
case 3076:
case 2165:
case 3442:
case 2362:
case 3979:
case 3980:
case 2844:
case 2349:
case 3469:
case 1347:
case 1999:
case 3891:
case 2706:
case 1301:
case 2689:
case 3904:
case 2670:
case 3462:
case 957:
case 933:
case 2682:
case 2731:
case 1576:
case 2151:
case 391:
case 508:
case 1768:
case 1531:
case 2776:
case 1371:
case 2658:
case 2862:
case 791:
case 3974:
case 2953:
case 950:
case 2491:
case 1219:
case 182:
case 3444:
case 2364:
case 1506:
case 4092:
case 865:
case 3938:
case 856:
case 3633:
case 2217:
case 2842:
case 983:
case 2548:
case 1920:
case 105:
case 1635:
case 1836:
case 3902:
case 3006:
case 2344:
case 854:
case 338:
case 552:
case 3909:
case 2684:
case 2410:
case 1847:
case 3391:
case 1801:
case 1828:
case 487:
case 1493:
case 1522:
case 2488:
case 2711:
case 3558:
case 3963:
case 2199:
case 931:
case 1084:
case 3852:
case 2395:
case 1951:
case 3859:
case 1945:
case 3354:
case 2373:
case 3298:
case 3943:
case 3029:
case 3648:
case 2285:
case 4086:
case 422:
case 3022:
case 2724:
case 3473:
case 3584:
case 1058:
case 3830:
case 3011:
case 1524:
case 2430:
case 998:
case 2895:
case 1250:
case 3359:
case 174:
case 1082:
case 1986:
case 3854:
case 3107:
case 453:
case 2087:
case 1816:
case 1615:
case 2194:
case 1590:
case 3352:
case 480:
case 2237:
case 3613:
case 2459:
case 2223:
case 176:
case 1153:
case 1239:
case 1733:
case 3570:
case 87:
case 2246:
case 793:
case 3024:
case 2722:
case 1232:
case 656:
case 3161:
case 665:
case 3863:
case 2639:
case 841:
case 3056:
case 383:
case 2540:
case 1928:
case 1623:
case 100:
case 1144:
case 503:
case 1845:
case 539:
case 3276:
case 72:
case 612:
case 3521:
case 938:
case 643:
case 1646:
case 1164:
case 2650:
case 2903:
case 733:
case 3514:
case 3843:
case 1021:
case 860:
case 1556:
case 1666:
case 1:
case 2215:
case 2171:
case 955:
case 3826:
case 350:
case 1865:
case 4016:
case 3318:
case 2426:
case 1345:
case 2756:
case 2678:
case 589:
case 1886:
case 1685:
case 750:
case 2995:
case 1142:
case 1760:
case 2101:
case 2634:
case 2147:
case 991:
case 357:
case 333:
case 1149:
case 309:
case 1916:
case 1012:
case 3231:
case 32:
case 3326:
case 3512:
case 4028:
case 3818:
case 243:
case 1169:
case 3683:
case 679:
case 3988:
case 3206:
case 2463:
case 783:
case 1740:
case 125:
case 3519:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1764525602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,];
var gg_b = "1764525602/";

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
