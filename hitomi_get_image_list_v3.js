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
case 958:
case 1778:
case 2523:
case 33:
case 363:
case 702:
case 2870:
case 3967:
case 3349:
case 32:
case 3677:
case 2864:
case 3133:
case 716:
case 650:
case 2148:
case 2344:
case 2675:
case 3229:
case 2877:
case 3413:
case 3271:
case 3554:
case 1899:
case 2986:
case 21:
case 3454:
case 2443:
case 4073:
case 1070:
case 2943:
case 2553:
case 2517:
case 1018:
case 4000:
case 378:
case 2217:
case 2429:
case 3135:
case 2001:
case 3888:
case 3934:
case 1615:
case 3408:
case 2135:
case 3097:
case 1286:
case 556:
case 3073:
case 885:
case 4066:
case 329:
case 3917:
case 3804:
case 1198:
case 589:
case 2912:
case 2308:
case 3308:
case 2209:
case 3011:
case 2095:
case 4087:
case 3445:
case 717:
case 147:
case 1610:
case 3511:
case 2977:
case 2446:
case 3129:
case 2913:
case 185:
case 2693:
case 290:
case 3654:
case 3683:
case 3693:
case 3179:
case 1578:
case 3599:
case 453:
case 3074:
case 1154:
case 3945:
case 3241:
case 654:
case 37:
case 3907:
case 764:
case 1121:
case 4084:
case 3892:
case 3257:
case 1730:
case 2363:
case 991:
case 372:
case 3655:
case 831:
case 1369:
case 2106:
case 3039:
case 1812:
case 3725:
case 3476:
case 2724:
case 3720:
case 274:
case 1552:
case 704:
case 2399:
case 3419:
case 3831:
case 891:
case 2962:
case 1624:
case 2398:
case 4034:
case 3320:
case 1212:
case 2691:
case 1680:
case 334:
case 2472:
case 1325:
case 1431:
case 2726:
case 711:
case 2301:
case 1449:
case 3426:
case 1297:
case 3370:
case 3356:
case 859:
case 1141:
case 559:
case 2218:
case 1629:
case 3537:
case 1330:
case 977:
case 2756:
case 3254:
case 3761:
case 2955:
case 1211:
case 3205:
case 1616:
case 3362:
case 1218:
case 3457:
case 722:
case 3811:
case 1301:
case 743:
case 2555:
case 3343:
case 1387:
case 1264:
case 2196:
case 3845:
case 2425:
case 2323:
case 3971:
case 798:
case 1380:
case 2289:
case 3571:
case 579:
case 2230:
case 669:
case 2424:
case 174:
case 2245:
case 3865:
case 2585:
case 2619:
case 919:
case 757:
case 849:
case 1396:
case 3750:
case 2188:
case 3645:
case 2403:
case 2836:
case 4024:
case 3037:
case 1726:
case 2901:
case 2920:
case 2376:
case 1496:
case 905:
case 2542:
case 134:
case 3936:
case 3108:
case 2642:
case 3321:
case 1423:
case 1186:
case 4037:
case 2689:
case 3327:
case 686:
case 3363:
case 2708:
case 1978:
case 606:
case 1328:
case 3964:
case 3379:
case 1617:
case 405:
case 636:
case 3330:
case 98:
case 3237:
case 2192:
case 2454:
case 385:
case 3795:
case 148:
case 3523:
case 2080:
case 145:
case 2891:
case 4049:
case 467:
case 847:
case 4074:
case 288:
case 1566:
case 4044:
case 597:
case 3939:
case 2325:
case 3651:
case 2596:
case 2792:
case 1160:
case 2996:
case 2179:
case 2520:
case 1138:
case 1023:
case 1562:
case 2789:
case 4069:
case 700:
case 286:
case 1821:
case 2152:
case 1885:
case 1142:
case 968:
case 379:
case 54:
case 1304:
case 2854:
case 3293:
case 461:
case 979:
case 2226:
case 234:
case 1633:
case 1841:
case 1406:
case 971:
case 2959:
case 2111:
case 3009:
case 1801:
case 1700:
case 3827:
case 1009:
case 408:
case 3138:
case 1621:
case 2547:
case 1959:
case 3896:
case 1737:
case 2900:
case 3524:
case 1171:
case 3417:
case 2437:
case 4040:
case 2341:
case 3056:
case 3676:
case 400:
case 2917:
case 884:
case 2632:
case 539:
case 3644:
case 3687:
case 1427:
case 2303:
case 4019:
case 1851:
case 2566:
case 3752:
case 1643:
case 1223:
case 2287:
case 2333:
case 921:
case 2276:
case 1682:
case 1128:
case 248:
case 1362:
case 2568:
case 3255:
case 4003:
case 2990:
case 3117:
case 1991:
case 2157:
case 1939:
case 1752:
case 2609:
case 2129:
case 1492:
case 3709:
case 3562:
case 2783:
case 1802:
case 3626:
case 3897:
case 536:
case 1585:
case 1946:
case 604:
case 2204:
case 1063:
case 1314:
case 99:
case 3707:
case 110:
case 2993:
case 2045:
case 551:
case 816:
case 2563:
case 770:
case 2406:
case 3251:
case 672:
case 297:
case 795:
case 2456:
case 820:
case 638:
case 3731:
case 1751:
case 2236:
case 976:
case 3380:
case 4092:
case 2748:
case 1622:
case 439:
case 2742:
case 2238:
case 878:
case 3589:
case 1497:
case 1006:
case 3901:
case 4077:
case 1560:
case 1777:
case 2860:
case 4011:
case 128:
case 1773:
case 2787:
case 3304:
case 2500:
case 1195:
case 3833:
case 1925:
case 3973:
case 3941:
case 3289:
case 3793:
case 3365:
case 744:
case 3157:
case 626:
case 3273:
case 1266:
case 815:
case 3772:
case 1232:
case 4091:
case 1948:
case 3216:
case 3736:
case 3477:
case 947:
case 3291:
case 801:
case 2829:
case 294:
case 1534:
case 809:
case 2235:
case 1699:
case 2028:
case 1573:
case 1508:
case 2142:
case 920:
case 2473:
case 3:
case 3112:
case 3434:
case 1548:
case 2150:
case 1282:
case 730:
case 3252:
case 934:
case 2168:
case 1685:
case 358:
case 3189:
case 1238:
case 3779:
case 1480:
case 1803:
case 3868:
case 1040:
case 3298:
case 3302:
case 2212:
case 2047:
case 2037:
case 2426:
case 311:
case 3566:
case 2370:
case 1279:
case 3497:
case 2845:
case 2324:
case 107:
case 1572:
case 324:
case 1878:
case 3846:
case 429:
case 666:
case 2766:
case 524:
case 1413:
case 527:
case 3463:
case 1619:
case 1949:
case 2911:
case 1755:
case 2319:
case 3661:
case 3666:
case 1920:
case 4090:
case 2165:
case 689:
case 2495:
case 1517:
case 623:
case 3840:
case 493:
case 3388:
case 2322:
case 3556:
case 3316:
case 3679:
case 1916:
case 1130:
case 4032:
case 2262:
case 759:
case 463:
case 2449:
case 3152:
case 2741:
case 4035:
case 2758:
case 2077:
case 1002:
case 2769:
case 4055:
case 3898:
case 3450:
case 1145:
case 1789:
case 273:
case 3360:
case 1698:
case 829:
case 2831:
case 2719:
case 2703:
case 4027:
case 3341:
case 3412:
case 2348:
case 3518:
case 1336:
case 1604:
case 1805:
case 5:
case 3893:
case 3052:
case 4095:
case 1917:
case 1924:
case 3591:
case 1044:
case 1052:
case 1684:
case 3922:
case 824:
case 2551:
case 2379:
case 307:
case 3022:
case 2663:
case 842:
case 2401:
case 3414:
case 3227:
case 3191:
case 2352:
case 865:
case 1672:
case 2680:
case 2952:
case 1263:
case 2342:
case 1064:
case 1593:
case 478:
case 20:
case 3100:
case 293:
case 1373:
case 3453:
case 3065:
case 2685:
case 2834:
case 802:
case 4017:
case 1889:
case 1415:
case 1339:
case 2246:
case 137:
case 1587:
case 2806:
case 1026:
case 97:
case 2757:
case 1089:
case 1656:
case 301:
case 3990:
case 1982:
case 1721:
case 1397:
case 1677:
case 2534:
case 3437:
case 265:
case 1856:
case 2377:
case 3114:
case 2044:
case 4053:
case 881:
case 2172:
case 2126:
case 2359:
case 651:
case 1866:
case 1331:
case 2283:
case 1111:
case 103:
case 3942:
case 3485:
case 1157:
case 1998:
case 1202:
case 2704:
case 1716:
case 2928:
case 595:
case 2438:
case 1595:
case 1370:
case 2664:
case 1399:
case 965:
case 3528:
case 464:
case 3395:
case 760:
case 370:
case 1201:
case 1137:
case 982:
case 146:
case 2750:
case 270:
case 1042:
case 2328:
case 1467:
case 698:
case 3288:
case 1969:
case 3586:
case 3773:
case 1243:
case 2383:
case 3215:
case 118:
case 2400:
case 3068:
case 3285:
case 869:
case 1717:
case 1884:
case 4026:
case 3382:
case 867:
case 1806:
case 1783:
case 2521:
case 2351:
case 2145:
case 1103:
case 2957:
case 2050:
case 590:
case 263:
case 2655:
case 2355:
case 3336:
case 2869:
case 2994:
case 2086:
case 2163:
case 1679:
case 3324:
case 3367:
case 83:
case 2448:
case 520:
case 537:
case 1398:
case 2846:
case 2597:
case 3686:
case 44:
case 3790:
case 1231:
case 894:
case 2169:
case 2306:
case 2094:
case 259:
case 875:
case 2411:
case 1414:
case 1506:
case 367:
case 3115:
case 774:
case 2292:
case 1787:
case 3245:
case 1372:
case 3605:
case 3809:
case 844:
case 1555:
case 1612:
case 2804:
case 1056:
case 2933:
case 1858:
case 975:
case 1353:
case 1079:
case 950:
case 2439:
case 47:
case 1776:
case 3248:
case 2601:
case 3968:
case 1728:
case 697:
case 3183:
case 3265:
case 1230:
case 1112:
case 723:
case 2099:
case 1310:
case 497:
case 2853:
case 3823:
case 1630:
case 3717:
case 2136:
case 534:
case 1169:
case 3803:
case 944:
case 431:
case 2618:
case 1570:
case 3493:
case 2320:
case 1888:
case 695:
case 3188:
case 2026:
case 3606:
case 113:
case 1605:
case 3196:
case 2066:
case 675:
case 1184:
case 649:
case 337:
case 1345:
case 876:
case 3765:
case 238:
case 2533:
case 2729:
case 127:
case 2029:
case 2702:
case 3165:
case 1869:
case 73:
case 1748:
case 747:
case 657:
case 3268:
case 1091:
case 1527:
case 3012:
case 1269:
case 3592:
case 3396:
case 3844:
case 1441:
case 181:
case 1892:
case 2712:
case 1093:
case 3359:
case 834:
case 2263:
case 1220:
case 2525:
case 4012:
case 187:
case 1799:
case 3598:
case 2221:
case 1992:
case 2468:
case 587:
case 1922:
case 135:
case 3272:
case 1424:
case 3055:
case 2365:
case 749:
case 1503:
case 1348:
case 2902:
case 3987:
case 2115:
case 1951:
case 151:
case 755:
case 1791:
case 2671:
case 3077:
case 3441:
case 278:
case 1239:
case 2941:
case 610:
case 3392:
case 3025:
case 1732:
case 1775:
case 3142:
case 1047:
case 2674:
case 927:
case 3730:
case 1045:
case 874:
case 3066:
case 2421:
case 321:
case 575:
case 1205:
case 1224:
case 3116:
case 1326:
case 114:
case 1529:
case 1665:
case 3622:
case 2697:
case 1664:
case 237:
case 2078:
case 1623:
case 2774:
case 754:
case 2847:
case 3609:
case 793:
case 4046:
case 687:
case 1097:
case 3211:
case 3050:
case 2282:
case 3613:
case 2214:
case 3529:
case 3611:
case 988:
case 3111:
case 3585:
case 3314:
case 17:
case 2339:
case 533:
case 3545:
case 126:
case 3495:
case 1482:
case 2720:
case 2118:
case 16:
case 1596:
case 3015:
case 3474:
case 2453:
case 2242:
case 340:
case 2656:
case 526:
case 2571:
case 3371:
case 87:
case 2936:
case 2257:
case 2187:
case 64:
case 769:
case 1308:
case 163:
case 2709:
case 2610:
case 153:
case 810:
case 327:
case 1632:
case 2997:
case 2669:
case 3652:
case 776:
case 621:
case 3575:
case 1305:
case 3515:
case 2546:
case 2998:
case 1935:
case 3909:
case 111:
case 1681:
case 1066:
case 2897:
case 2006:
case 2149:
case 2795:
case 3530:
case 3618:
case 734:
case 826:
case 1614:
case 3838:
case 915:
case 2119:
case 2636:
case 2137:
case 951:
case 1117:
case 1747:
case 1505:
case 383:
case 2947:
case 211:
case 861:
case 1179:
case 3500:
case 2243:
case 1291:
case 1472:
case 51:
case 1062:
case 2270:
case 1022:
case 1237:
case 319:
case 1930:
case 1557:
case 2463:
case 2569:
case 2749:
case 3345:
case 2326:
case 1146:
case 3563:
case 1106:
case 1071:
case 2091:
case 3762:
case 131:
case 1530:
case 1660:
case 1635:
case 1796:
case 3984:
case 1771:
case 2211:
case 491:
case 2418:
case 1655:
case 2464:
case 2062:
case 3926:
case 1122:
case 315:
case 1295:
case 2856:
case 2096:
case 2132:
case 2361:
case 3352:
case 3640:
case 498:
case 200:
case 598:
case 3150:
case 52:
case 2034:
case 2881:
case 2782:
case 1228:
case 170:
case 3763:
case 3695:
case 948:
case 3469:
case 180:
case 2527:
case 3277:
case 133:
case 1004:
case 731:
case 3238:
case 178:
case 3603:
case 102:
case 2736:
case 3590:
case 605:
case 949:
case 1086:
case 1761:
case 1877:
case 2428:
case 233:
case 2875:
case 3902:
case 3010:
case 2366:
case 3994:
case 1864:
case 1147:
case 2647:
case 281:
case 2600:
case 2307:
case 1003:
case 2074:
case 848:
case 3689:
case 788:
case 1953:
case 2208:
case 674:
case 2575:
case 88:
case 1421:
case 433:
case 3614:
case 2739:
case 252:
case 3208:
case 2841:
case 2014:
case 2599:
case 3525:
case 2224:
case 3262:
case 2092:
case 3319:
case 1177:
case 1676:
case 641:
case 1697:
case 2378:
case 523:
case 1133:
case 3032:
case 2329:
case 2991:
case 3729:
case 2638:
case 1874:
case 94:
case 2908:
case 501:
case 3620:
case 3383:
case 1119:
case 2707:
case 767:
case 2380:
case 512:
case 2779:
case 2387:
case 3920:
case 1153:
case 3826:
case 3433:
case 2223:
case 2916:
case 2338:
case 2692:
case 1525:
case 887:
case 2529:
case 3776:
case 3965:
case 2570:
case 407:
case 3821:
case 1094:
case 26:
case 66:
case 3465:
case 487:
case 591:
case 2076:
case 249:
case 2102:
case 3538:
case 398:
case 61:
case 3249:
case 1000:
case 2427:
case 3007:
case 3344:
case 3029:
case 1731:
case 84:
case 2019:
case 1381:
case 2543:
case 566:
case 1639:
case 1688:
case 733:
case 1046:
case 451:
case 592:
case 910:
case 2430:
case 3198:
case 1158:
case 3317:
case 1564:
case 3028:
case 2027:
case 3930:
case 2939:
case 1863:
case 2745:
case 470:
case 3430:
case 3346:
case 1051:
case 3278:
case 1563:
case 1377:
case 1823:
case 712:
case 3213:
case 2826:
case 3174:
case 629:
case 2049:
case 2935:
case 2442:
case 4018:
case 2042:
case 284:
case 2562:
case 59:
case 3954:
case 308:
case 3966:
case 3113:
case 1516:
case 1818:
case 3128:
case 3004:
case 1625:
case 1602:
case 729:
case 1941:
case 2493:
case 706:
case 1561:
case 1754:
case 3988:
case 3329:
case 75:
case 395:
case 3096:
case 678:
case 2611:
case 2364:
case 2976:
case 81:
case 2820:
case 443:
case 3269:
case 418:
case 3998:
case 1999:
case 2985:
case 2800:
case 1384:
case 3506:
case 1764:
case 1404:
case 637:
case 4009:
case 942:
case 3503:
case 361:
case 1865:
case 169:
case 3057:
case 366:
case 3567:
case 926:
case 3014:
case 2491:
case 4063:
case 129:
case 1536:
case 3660:
case 1031:
case 3279:
case 3090:
case 2321:
case 1116:
case 3305:
case 1341:
case 1911:
case 190:
case 3534:
case 1780:
case 4082:
case 106:
case 2291:
case 2550:
case 724:
case 1261:
case 528:
case 2605:
case 1967:
case 4065:
case 2070:
case 1215:
case 3212:
case 2914:
case 23:
case 1838:
case 3543:
case 3638:
case 2107:
case 2227:
case 1523:
case 3825:
case 1533:
case 2233:
case 375:
case 1537:
case 680:
case 3444:
case 3132:
case 2012:
case 479:
case 3432:
case 692:
case 3774:
case 3085:
case 2576:
case 1132:
case 601:
case 2023:
case 1285:
case 3572:
case 2407:
case 1657:
case 2160:
case 1289:
case 276:
case 390:
case 1890:
case 2357:
case 2488:
case 735:
case 1963:
case 3685:
case 3921:
case 3411:
case 3400:
case 2182:
case 473:
case 2982:
case 1790:
case 1299:
case 3923:
case 2637:
case 1429:
case 1409:
case 3023:
case 3768:
case 389:
case 2397:
case 394:
case 3488:
case 448:
case 1252:
case 3552:
case 742:
case 2643:
case 205:
case 387:
case 1217:
case 3861:
case 2470:
case 2256:
case 963:
case 1502:
case 1277:
case 336:
case 856:
case 3504:
case 247:
case 745:
case 3919:
case 728:
case 904:
case 56:
case 3167:
case 250:
case 2423:
case 2250:
case 2796:
case 112:
case 1019:
case 2009:
case 514:
case 1075:
case 3492:
case 1590:
case 853:
case 326:
case 684:
case 3192:
case 1255:
case 3797:
case 914:
case 1611:
case 2460:
case 2788:
case 4008:
case 3467:
case 1390:
case 509:
case 399:
case 3103:
case 751:
case 3219:
case 924:
case 1705:
case 1808:
case 3399:
case 320:
case 1568:
case 2183:
case 201:
case 2265:
case 1374:
case 1210:
case 653:
case 1894:
case 1435:
case 2083:
case 154:
case 3369:
case 1740:
case 1836:
case 3034:
case 72:
case 2629:
case 2775:
case 1644:
case 3859:
case 1178:
case 1651:
case 3723:
case 1975:
case 3448:
case 175:
case 3286:
case 3978:
case 2065:
case 441:
case 3800:
case 2794:
case 161:
case 2686:
case 48:
case 3708:
case 3691:
case 1901:
case 2271:
case 438:
case 219:
case 2842:
case 2368:
case 3292:
case 1041:
case 652:
case 228:
case 1804:
case 4068:
case 2624:
case 1933:
case 1329:
case 1842:
case 3757:
case 2016:
case 77:
case 2631:
case 900:
case 2100:
case 2910:
case 3641:
case 1580:
case 226:
case 1667:
case 2382:
case 71:
case 3261:
case 1204:
case 835:
case 41:
case 1309:
case 194:
case 871:
case 2017:
case 242:
case 3929:
case 2514:
case 3326:
case 2633:
case 1098:
case 1149:
case 1298:
case 104:
case 3089:
case 681:
case 2147:
case 2771:
case 296:
case 496:
case 2005:
case 2273:
case 3466:
case 292:
case 630:
case 787:
case 1727:
case 2968:
case 1226:
case 841:
case 1340:
case 552:
case 4:
case 3438:
case 696:
case 2759:
case 3318:
case 2717:
case 1825:
case 773:
case 3612:
case 2931:
case 2981:
case 3221:
case 1456:
case 3118:
case 3315:
case 0:
case 3435:
case 1994:
case 3588:
case 3541:
case 1385:
case 2254:
case 3642:
case 1498:
case 2684:
case 1862:
case 3671:
case 413:
case 1509:
case 1436:
case 825:
case 583:
case 3755:
case 2714:
case 3372:
case 2174:
case 2501:
case 562:
case 1152:
case 1577:
case 78:
case 1405:
case 1898:
case 465:
case 3081:
case 3185:
case 2885:
case 3956:
case 3946:
case 1822:
case 1302:
case 3202:
case 3064:
case 198:
case 384:
case 74:
case 2852:
case 2592:
case 2612:
case 1594:
case 289:
case 2580:
case 2932:
case 540:
case 2713:
case 3576:
case 3668:
case 1110:
case 3428:
case 182:
case 930:
case 1800:
case 2130:
case 2572:
case 596:
case 3601:
case 2953:
case 3353:
case 939:
case 685:
case 2531:
case 1356:
case 3274:
case 2186:
case 1401:
case 302:
case 2305:
case 1445:
case 916:
case 2144:
case 3997:
case 2158:
case 1918:
case 244:
case 3914:
case 614:
case 1631:
case 719:
case 872:
case 1971:
case 1350:
case 1645:
case 221:
case 714:
case 3688:
case 2317:
case 603:
case 1167:
case 1316:
case 3405:
case 70:
case 91:
case 2112:
case 691:
case 1395:
case 57:
case 298:
case 3044:
case 2765:
case 2791:
case 3166:
case 335:
case 1887:
case 495:
case 806:
case 2171:
case 1258:
case 3607:
case 2089:
case 1459:
case 3102:
case 984:
case 1293:
case 758:
case 3789:
case 1906:
case 3224:
case 1795:
case 2007:
case 2038:
case 4051:
case 852:
case 1032:
case 2176:
case 1478:
case 2153:
case 1043:
case 3180:
case 3222:
case 1940:
case 444:
case 3621:
case 3072:
case 2662:
case 424:
case 1489:
case 518:
case 371:
case 1798:
case 58:
case 213:
case 1814:
case 3753:
case 3983:
case 3391:
case 2879:
case 3027:
case 460:
case 4039:
case 3300:
case 2345:
case 1501:
case 119:
case 1014:
case 661:
case 3420:
case 2694:
case 521:
case 1392:
case 2888:
case 3446:
case 2141:
case 1433:
case 683:
case 235:
case 1760:
case 300:
case 1695:
case 3342:
case 2565:
case 2728:
case 1591:
case 2906:
case 645:
case 304:
case 287:
case 2440:
case 1986:
case 1855:
case 1574:
case 434:
case 648:
case 1391:
case 1240:
case 1081:
case 3600:
case 3425:
case 718:
case 3436:
case 4075:
case 485:
case 3711:
case 2744:
case 449:
case 76:
case 1400:
case 2381:
case 105:
case 1008:
case 3473:
case 122:
case 1280:
case 2335:
case 1809:
case 2995:
case 2956:
case 748:
case 1061:
case 3003:
case 3634:
case 4038:
case 567:
case 3086:
case 550:
case 355:
case 3702:
case 753:
case 2648:
case 406:
case 896:
case 2538:
case 986:
case 3416:
case 807:
case 3385:
case 382:
case 3628:
case 322:
case 506:
case 2954:
case 2281:
case 3747:
case 4059:
case 1069:
case 3937:
case 2318:
case 1323:
case 2965:
case 647:
case 3487:
case 4006:
case 1871:
case 189:
case 1411:
case 193:
case 1934:
case 3295:
case 3948:
case 3217:
case 2296:
case 3560:
case 2441:
case 138:
case 2602:
case 2857:
case 3816:
case 1127:
case 3197:
case 3031:
case 2851:
case 1883:
case 2598:
case 1903:
case 1646:
case 212:
case 3808:
case 232:
case 4058:
case 932:
case 2755:
case 3581:
case 3879:
case 3904:
case 3561:
case 837:
case 1547:
case 3030:
case 2432:
case 3407:
case 3024:
case 1641:
case 1807:
case 3577:
case 142:
case 471:
case 3195:
case 519:
case 1139:
case 500:
case 2974:
case 655:
case 3796:
case 993:
case 1434:
case 2696:
case 3817:
case 1759:
case 2416:
case 941:
case 3139:
case 2604:
case 761:
case 2088:
case 1833:
case 3813:
case 515:
case 2519:
case 42:
case 557:
case 3389:
case 3306:
case 2946:
case 3429:
case 3539:
case 1589:
case 1944:
case 3409:
case 214:
case 2299:
case 989:
case 2081:
case 2073:
case 2015:
case 1213:
case 1824:
case 772:
case 3423:
case 517:
case 3323:
case 1567:
case 2494:
case 3684:
case 24:
case 2203:
case 922:
case 3082:
case 2722:
case 3451:
case 25:
case 1876:
case 2778:
case 3206:
case 3035:
case 3627:
case 3629:
case 3540:
case 886:
case 2502:
case 4067:
case 344:
case 2108:
case 992:
case 1115:
case 1832:
case 3547:
case 2772:
case 3860:
case 541:
case 738:
case 3364:
case 3099:
case 3439:
case 2919:
case 4030:
case 2124:
case 2372:
case 236:
case 2122:
case 1200:
case 2541:
case 1718:
case 2785:
case 918:
case 2727:
case 3819:
case 40:
case 1879:
case 658:
case 403:
case 3938:
case 2554:
case 3218:
case 3443:
case 303:
case 192:
case 1317:
case 2560:
case 3210:
case 3960:
case 1288:
case 346:
case 3608:
case 1666:
case 2225:
case 4022:
case 3240:
case 1260:
case 1545:
case 1733:
case 1219:
case 1192:
case 459:
case 3828:
case 46:
case 1642:
case 3663:
case 3282:
case 1290:
case 3703:
case 1318:
case 1486:
case 3981:
case 1531:
case 1333:
case 166:
case 4004:
case 2414:
case 3093:
case 2819:
case 437:
case 3481:
case 1909:
case 1792:
case 1671:
case 2700:
case 445:
case 3637:
case 1988:
case 956:
case 2297:
case 3203:
case 671:
case 412:
case 2966:
case 1601:
case 176:
case 3636:
case 1813:
case 1507:
case 3794:
case 902:
case 2960:
case 1913:
case 2478:
case 1206:
case 2892:
case 3602:
case 3119:
case 3001:
case 3522:
case 2701:
case 3026:
case 299:
case 2958:
case 805:
case 3737:
case 3595:
case 721:
case 30:
case 440:
case 1447:
case 3650:
case 1437:
case 333:
case 2511:
case 2166:
case 2940:
case 3335:
case 3728:
case 89:
case 93:
case 3334:
case 2330:
case 3912:
case 2058:
case 3715:
case 1981:
case 2672:
case 549:
case 739:
case 3239:
case 2809:
case 2369:
case 3226:
case 3332:
case 386:
case 3656:
case 3478:
case 2973:
case 50:
case 3647:
case 676:
case 3610:
case 2346:
case 928:
case 1914:
case 353:
case 1229:
case 1559:
case 3847:
case 3857:
case 2810:
case 936:
case 3639:
case 580:
case 797:
case 207:
case 2639:
case 1849:
case 813:
case 1983:
case 3870:
case 256:
case 3980:
case 1194:
case 224:
case 909:
case 2695:
case 1708:
case 1553:
case 2024:
case 160:
case 2524:
case 858:
case 2903:
case 1418:
case 3033:
case 396:
case 2455:
case 994:
case 4062:
case 1144:
case 3136:
case 2362:
case 2410:
case 1446:
case 1126:
case 634:
case 262:
case 762:
case 3527:
case 3830:
case 1419:
case 3190:
case 2614:
case 2298:
case 1123:
case 1500:
case 1510:
case 3852:
case 3769:
case 2979:
case 2314:
case 573:
case 640:
case 1852:
case 421:
case 511:
case 1001:
case 839:
case 10:
case 414:
case 923:
case 2056:
case 3582:
case 3905:
case 538:
case 3862:
case 2801:
case 3886:
case 2577:
case 115:
case 3110:
case 2315:
case 2332:
case 1711:
case 171:
case 4031:
case 1908:
case 3143:
case 1151:
case 2673:
case 328:
case 4029:
case 2492:
case 1124:
case 3727:
case 3722:
case 1:
case 1592:
case 581:
case 22:
case 186:
case 3377:
case 436:
case 2039:
case 1722:
case 3672:
case 532:
case 1182:
case 1600:
case 3716:
case 3281:
case 2404:
case 2185:
case 1196:
case 2285:
case 1921:
case 3786:
case 1055:
case 3384:
case 1620:
case 4028:
case 229:
case 935:
case 1735:
case 1926:
case 432:
case 3855:
case 63:
case 3256:
case 1962:
case 1188:
case 1058:
case 822:
case 1768:
case 2220:
case 3767:
case 3231:
case 3623:
case 1190:
case 693:
case 1828:
case 4054:
case 616:
case 2402:
case 3230:
case 510:
case 3704:
case 3162:
case 458:
case 4007:
case 746:
case 2988:
case 3706:
case 1686:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1707958801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,];
var gg_b = "1707958801/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
