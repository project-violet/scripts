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
case 821:
case 3594:
case 281:
case 2083:
case 1423:
case 2660:
case 664:
case 944:
case 452:
case 1850:
case 786:
case 2007:
case 2165:
case 2626:
case 719:
case 3658:
case 3955:
case 1196:
case 1207:
case 4055:
case 3131:
case 2656:
case 2394:
case 846:
case 3681:
case 1453:
case 427:
case 1724:
case 3087:
case 1499:
case 462:
case 544:
case 2560:
case 2381:
case 1490:
case 3694:
case 2569:
case 1964:
case 2352:
case 3765:
case 3003:
case 1798:
case 2285:
case 2230:
case 2328:
case 2601:
case 1039:
case 2556:
case 707:
case 1030:
case 2276:
case 354:
case 3528:
case 158:
case 3360:
case 1767:
case 3471:
case 4009:
case 850:
case 3807:
case 2262:
case 3095:
case 2786:
case 1068:
case 2418:
case 1437:
case 1933:
case 2710:
case 1742:
case 301:
case 3338:
case 897:
case 503:
case 3751:
case 3220:
case 2532:
case 2379:
case 3229:
case 2814:
case 2106:
case 2461:
case 3102:
case 3259:
case 2538:
case 3570:
case 491:
case 3250:
case 3721:
case 3489:
case 2211:
case 3579:
case 1097:
case 2775:
case 3900:
case 1449:
case 2412:
case 1062:
case 3788:
case 601:
case 2268:
case 2344:
case 2803:
case 873:
case 860:
case 1146:
case 3110:
case 1313:
case 2151:
case 1177:
case 3119:
case 2632:
case 3636:
case 31:
case 2702:
case 1691:
case 2980:
case 4061:
case 838:
case 2989:
case 1474:
case 714:
case 1617:
case 4018:
case 2400:
case 61:
case 433:
case 2409:
case 3912:
case 565:
case 2307:
case 689:
case 2434:
case 1975:
case 3314:
case 3879:
case 4046:
case 292:
case 3870:
case 2514:
case 19:
case 3583:
case 3977:
case 1891:
case 3836:
case 2942:
case 2733:
case 1118:
case 1543:
case 880:
case 3815:
case 1376:
case 3740:
case 1578:
case 1716:
case 1109:
case 1347:
case 3056:
case 2052:
case 3749:
case 3934:
case 965:
case 3303:
case 1605:
case 1789:
case 2545:
case 3387:
case 3448:
case 1902:
case 1451:
case 2477:
case 2587:
case 1228:
case 3607:
case 3133:
case 1330:
case 124:
case 3026:
case 2022:
case 1643:
case 1252:
case 1385:
case 2058:
case 737:
case 2079:
case 129:
case 2924:
case 2757:
case 1311:
case 485:
case 1520:
case 3467:
case 3038:
case 3395:
case 1368:
case 2801:
case 991:
case 2496:
case 1362:
case 2204:
case 2595:
case 756:
case 2015:
case 3498:
case 3164:
case 3790:
case 209:
case 1550:
case 482:
case 1397:
case 3032:
case 2036:
case 251:
case 3894:
case 2954:
case 3753:
case 84:
case 933:
case 1620:
case 217:
case 1013:
case 188:
case 591:
case 384:
case 393:
case 1931:
case 2044:
case 3996:
case 3852:
case 1125:
case 2856:
case 2992:
case 1155:
case 3822:
case 2826:
case 78:
case 2998:
case 2190:
case 261:
case 2869:
case 2213:
case 3127:
case 684:
case 3723:
case 464:
case 3055:
case 1582:
case 2907:
case 1375:
case 355:
case 1271:
case 2257:
case 3914:
case 179:
case 3673:
case 1606:
case 2348:
case 1736:
case 1027:
case 2577:
case 2487:
case 2983:
case 1874:
case 2071:
case 1521:
case 235:
case 1319:
case 2445:
case 3290:
case 4014:
case 3377:
case 3113:
case 2342:
case 3346:
case 1770:
case 2227:
case 2704:
case 1386:
case 1588:
case 2634:
case 2809:
case 3025:
case 916:
case 545:
case 2818:
case 3903:
case 942:
case 3334:
case 3253:
case 2861:
case 2414:
case 2646:
case 4045:
case 3987:
case 3573:
case 1302:
case 3648:
case 3945:
case 3784:
case 362:
case 3223:
case 2117:
case 1405:
case 2373:
case 3880:
case 665:
case 2812:
case 3816:
case 4003:
case 1939:
case 797:
case 589:
case 1688:
case 1985:
case 1890:
case 1911:
case 3274:
case 1169:
case 391:
case 1160:
case 2855:
case 1033:
case 931:
case 691:
case 2233:
case 3692:
case 2141:
case 270:
case 3000:
case 1156:
case 263:
case 2825:
case 401:
case 3524:
case 3871:
case 1997:
case 2563:
case 187:
case 2354:
case 3061:
case 1235:
case 106:
case 577:
case 1722:
case 531:
case 678:
case 1216:
case 333:
case 1331:
case 1758:
case 2392:
case 3249:
case 253:
case 174:
case 1466:
case 3012:
case 3592:
case 310:
case 2596:
case 2089:
case 819:
case 1781:
case 2035:
case 2663:
case 2080:
case 1420:
case 886:
case 378:
case 3624:
case 41:
case 86:
case 3567:
case 3251:
case 2863:
case 148:
case 1327:
case 1242:
case 2797:
case 3729:
case 88:
case 2219:
case 3481:
case 125:
case 22:
case 1441:
case 3452:
case 2456:
case 2525:
case 708:
case 344:
case 3766:
case 3428:
case 3458:
case 2275:
case 2768:
case 2555:
case 2426:
case 3854:
case 964:
case 122:
case 2994:
case 3759:
case 2042:
case 2460:
case 2371:
case 1590:
case 1357:
case 2711:
case 2469:
case 3221:
case 205:
case 10:
case 1273:
case 3206:
case 1553:
case 3197:
case 167:
case 1008:
case 428:
case 1364:
case 3793:
case 3892:
case 2896:
case 2952:
case 4026:
case 3034:
case 2928:
case 294:
case 283:
case 3162:
case 2401:
case 7:
case 2958:
case 3898:
case 3168:
case 1195:
case 3494:
case 1523:
case 111:
case 1690:
case 3111:
case 3969:
case 1699:
case 2150:
case 901:
case 3616:
case 1640:
case 2612:
case 3139:
case 685:
case 569:
case 3130:
case 1333:
case 1649:
case 2509:
case 1904:
case 2970:
case 3705:
case 382:
case 837:
case 3938:
case 871:
case 3848:
case 3063:
case 1821:
case 2024:
case 1484:
case 1574:
case 3842:
case 1783:
case 2846:
case 2877:
case 1851:
case 2054:
case 431:
case 385:
case 299:
case 4038:
case 2915:
case 2618:
case 1103:
case 3309:
case 2172:
case 2785:
case 1031:
case 2834:
case 649:
case 2739:
case 3096:
case 559:
case 2512:
case 3318:
case 303:
case 2067:
case 1417:
case 2105:
case 780:
case 1674:
case 3470:
case 136:
case 3535:
case 3361:
case 3589:
case 603:
case 1491:
case 2432:
case 2389:
case 2335:
case 349:
case 840:
case 2231:
case 493:
case 2776:
case 3312:
case 2143:
case 2518:
case 1537:
case 3772:
case 2679:
case 1513:
case 2670:
case 1093:
case 3935:
case 3638:
case 3845:
case 441:
case 599:
case 3400:
case 2544:
case 3188:
case 2912:
case 3916:
case 3803:
case 453:
case 4016:
case 2186:
case 3182:
case 1876:
case 1142:
case 858:
case 847:
case 3887:
case 3151:
case 2636:
case 2961:
case 115:
case 4080:
case 1384:
case 426:
case 2570:
case 1391:
case 2721:
case 2108:
case 2435:
case 1974:
case 1029:
case 3211:
case 2900:
case 999:
case 2644:
case 1066:
case 2416:
case 3268:
case 639:
case 2515:
case 813:
case 3262:
case 2095:
case 3418:
case 463:
case 1173:
case 201:
case 3710:
case 1059:
case 2883:
case 2751:
case 1777:
case 2220:
case 1050:
case 418:
case 3379:
case 37:
case 2102:
case 3297:
case 868:
case 1796:
case 3601:
case 505:
case 2552:
case 1203:
case 173:
case 2272:
case 73:
case 2528:
case 1078:
case 2326:
case 254:
case 2360:
case 1287:
case 2369:
case 2045:
case 1124:
case 2471:
case 2581:
case 1953:
case 1427:
case 1923:
case 138:
case 994:
case 1245:
case 3569:
case 2356:
case 2558:
case 2765:
case 1341:
case 3285:
case 52:
case 2003:
case 3328:
case 3455:
case 3526:
case 334:
case 1072:
case 502:
case 264:
case 2925:
case 2652:
case 3656:
case 905:
case 1862:
case 2681:
case 3394:
case 197:
case 3971:
case 432:
case 4071:
case 594:
case 2594:
case 435:
case 1811:
case 1464:
case 2014:
case 3660:
case 1990:
case 3007:
case 3626:
case 2301:
case 3895:
case 2658:
case 2955:
case 518:
case 4092:
case 2858:
case 3998:
case 1965:
case 926:
case 3190:
case 570:
case 361:
case 4067:
case 2284:
case 3869:
case 2454:
case 2723:
case 1611:
case 2753:
case 2157:
case 1084:
case 317:
case 3967:
case 3463:
case 1697:
case 824:
case 2828:
case 293:
case 3044:
case 3856:
case 3992:
case 2996:
case 2852:
case 661:
case 1755:
case 1366:
case 3595:
case 526:
case 918:
case 3015:
case 800:
case 1511:
case 2790:
case 4024:
case 3727:
case 2217:
case 1238:
case 351:
case 1091:
case 3924:
case 3153:
case 4054:
case 499:
case 1359:
case 3070:
case 231:
case 2467:
case 2963:
case 343:
case 651:
case 2395:
case 1562:
case 541:
case 2492:
case 180:
case 1725:
case 736:
case 1431:
case 609:
case 245:
case 2683:
case 888:
case 2060:
case 2442:
case 3477:
case 3587:
case 228:
case 2133:
case 2607:
case 1547:
case 3022:
case 1718:
case 2737:
case 70:
case 2026:
case 722:
case 535:
case 3058:
case 304:
case 532:
case 2740:
case 725:
case 2056:
case 1475:
case 1585:
case 748:
case 757:
case 2934:
case 1041:
case 1269:
case 4073:
case 2387:
case 1260:
case 108:
case 242:
case 790:
case 4048:
case 395:
case 3094:
case 1:
case 2583:
case 2473:
case 2977:
case 1951:
case 3832:
case 42:
case 1305:
case 2836:
case 1982:
case 1201:
case 692:
case 3137:
case 320:
case 1647:
case 711:
case 2507:
case 1639:
case 2001:
case 1116:
case 1709:
case 767:
case 1630:
case 932:
case 1135:
case 620:
case 1189:
case 4042:
case 392:
case 3838:
case 3948:
case 2870:
case 1180:
case 641:
case 2237:
case 1462:
case 2012:
case 551:
case 2741:
case 3398:
case 210:
case 509:
case 1365:
case 1261:
case 1497:
case 3035:
case 278:
case 3080:
case 326:
case 2061:
case 3367:
case 1194:
case 653:
case 341:
case 626:
case 775:
case 1037:
case 1212:
case 2240:
case 2249:
case 909:
case 2009:
case 2692:
case 1128:
case 3141:
case 561:
case 3825:
case 1152:
case 363:
case 1857:
case 1074:
case 1929:
case 318:
case 47:
case 1920:
case 3354:
case 943:
case 663:
case 3324:
case 83:
case 670:
case 2274:
case 291:
case 1959:
case 1827:
case 439:
case 3855:
case 1209:
case 2995:
case 618:
case 1200:
case 796:
case 1508:
case 713:
case 262:
case 2835:
case 2648:
case 3264:
case 1053:
case 520:
case 3117:
case 2223:
case 806:
case 2880:
case 1170:
case 2104:
case 2816:
case 3812:
case 976:
case 434:
case 592:
case 3818:
case 1686:
case 2334:
case 2407:
case 1115:
case 904:
case 1610:
case 2253:
case 2483:
case 2987:
case 2573:
case 3191:
case 1136:
case 265:
case 3184:
case 4083:
case 1351:
case 2377:
case 2717:
case 1738:
case 3227:
case 920:
case 1905:
case 252:
case 4007:
case 576:
case 1255:
case 2025:
case 3800:
case 1439:
case 1943:
case 1447:
case 1833:
case 2055:
case 992:
case 3403:
case 3907:
case 1225:
case 1519:
case 3257:
case 2914:
case 255:
case 15:
case 2673:
case 1090:
case 1321:
case 3546:
case 1602:
case 3348:
case 1510:
case 2542:
case 3577:
case 1732:
case 3983:
case 1099:
case 3380:
case 156:
case 3432:
case 1787:
case 417:
case 3389:
case 249:
case 1802:
case 1703:
case 3098:
case 1065:
case 1349:
case 3316:
case 2312:
case 3776:
case 3785:
case 3739:
case 2318:
case 1337:
case 729:
case 3512:
case 2778:
case 3067:
case 3438:
case 2580:
case 2470:
case 811:
case 1808:
case 2535:
case 1984:
case 3661:
case 4079:
case 3846:
case 2842:
case 2932:
case 857:
case 1263:
case 399:
case 1819:
case 285:
case 1714:
case 825:
case 166:
case 3618:
case 3915:
case 2300:
case 890:
case 2309:
case 2147:
case 939:
case 2743:
case 1886:
case 2185:
case 788:
case 1875:
case 3612:
case 3500:
case 2444:
case 97:
case 4015:
case 3509:
case 409:
case 822:
case 2938:
case 1917:
case 2063:
case 282:
case 3024:
case 4028:
case 2898:
case 2168:
case 2926:
case 79:
case 3073:
case 3159:
case 694:
case 1564:
case 1006:
case 1627:
case 1353:
case 3150:
case 3208:
case 2671:
case 3120:
case 1323:
case 3202:
case 2793:
case 3896:
case 2956:
case 140:
case 2892:
case 2034:
case 394:
case 3928:
case 3625:
case 2325:
case 2458:
case 62:
case 3555:
case 3426:
case 2422:
case 2288:
case 602:
case 3994:
case 1051:
case 2077:
case 137:
case 3460:
case 2759:
case 3042:
case 2046:
case 171:
case 492:
case 3711:
case 724:
case 305:
case 2750:
case 302:
case 2251:
case 2720:
case 1277:
case 3048:
case 495:
case 1246:
case 2729:
case 2571:
case 2481:
case 1390:
case 1557:
case 3525:
case 2901:
case 2282:
case 2428:
case 396:
case 3177:
case 2142:
case 3313:
case 1110:
case 3773:
case 3146:
case 1706:
case 2384:
case 3691:
case 1961:
case 215:
case 1636:
case 1119:
case 1293:
case 1186:
case 3872:
case 2876:
case 2830:
case 1912:
case 696:
case 2513:
case 1679:
case 3617:
case 3474:
case 3584:
case 2093:
case 1751:
case 1220:
case 2777:
case 1536:
case 1338:
case 2173:
case 2746:
case 3591:
case 246:
case 2059:
case 159:
case 3011:
case 1515:
case 3933:
case 1782:
case 3843:
case 3304:
case 536:
case 1266:
case 675:
case 3134:
case 2066:
case 3440:
case 3062:
case 1909:
case 1788:
case 1480:
case 881:
case 2020:
case 3748:
case 372:
case 1332:
case 3517:
case 1579:
case 1489:
case 1250:
case 1108:
case 2613:
case 753:
case 2341:
case 732:
case 1558:
case 3047:
case 647:
case 548:
case 1522:
case 238:
case 3499:
case 2154:
case 1087:
case 590:
case 3964:
case 2245:
case 3490:
case 3767:
case 347:
case 1360:
case 3163:
case 2287:
case 3893:
case 2124:
case 1471:
case 2953:
case 1045:
case 50:
case 1552:
case 2203:
case 2796:
case 3792:
case 260:
case 1326:
case 2078:
case 735:
case 154:
case 273:
case 1272:
case 567:
case 2198:
case 330:
case 668:
case 948:
case 1658:
case 1955:
case 1301:
case 2868:
case 3859:
case 990:
case 3423:
case 1594:
case 1205:
case 4057:
case 2990:
case 2811:
case 2464:
case 3283:
case 2167:
case 297:
case 2005:
case 368:
case 3724:
case 3829:
case 164:
case 2192:
case 1628:
case 3196:
case 90:
case 3641:
case 511:
case 1243:
case 1828:
case 193:
case 184:
case 3125:
case 906:
case 3841:
case 2662:
case 1157:
case 3620:
case 3593:
case 1424:
case 2084:
case 1753:
case 2393:
case 1723:
case 3650:
case 1454:
case 3155:
case 2668:
case 2965:
case 2562:
case 506:
case 3566:
case 1395:
case 2725:
case 2431:
case 895:
case 3771:
case 3529:
case 329:
case 2350:
case 1467:
case 1038:
case 3236:
case 3520:
case 131:
case 2511:
case 1790:
case 1217:
case 3559:
case 1894:
case 2091:
case 1799:
case 1032:
case 892:
case 2568:
case 1498:
case 987:
case 3465:
case 3789:
case 3884:
case 3421:
case 861:
case 3735:
case 2813:
case 3780:
case 142:
case 4002:
case 3222:
case 72:
case 2226:
case 3347:
case 2372:
case 3488:
case 3100:
case 2041:
case 3258:
case 1749:
case 3572:
case 1737:
case 2486:
case 2576:
case 324:
case 3330:
case 1607:
case 1133:
case 3228:
case 2547:
case 3385:
case 3252:
case 3339:
case 1683:
case 2761:
case 3281:
case 2419:
case 3902:
case 145:
case 2906:
case 24:
case 3451:
case 4008:
case 467:
case 128:
case 1060:
case 2189:
case 1879:
case 2408:
case 422:
case 40:
case 1870:
case 4019:
case 2180:
case 3294:
case 2709:
case 2685:
case 2988:
case 979:
case 2343:
case 2639:
case 2116:
case 2630:
case 3543:
case 490:
case 93:
case 2982:
case 2201:
case 843:
case 1815:
case 3672:
case 3161:
case 189:
case 3919:
case 448:
case 457:
case 425:
case 2305:
case 1836:
case 3891:
case 1977:
case 1583:
case 116:
case 2951:
case 2212:
case 133:
case 3216:
case 77:
case 2726:
case 2468:
case 1598:
case 3758:
case 3331:
case 529:
case 1654:
case 3450:
case 2864:
case 3289:
case 2194:
case 2760:
case 3459:
case 306:
case 3781:
case 496:
case 2261:
case 2497:
case 178:
case 3420:
case 3728:
case 2040:
case 3466:
case 739:
case 2218:
case 1237:
case 2756:
case 2365:
case 3752:
case 3033:
case 3968:
case 3665:
case 687:
case 2122:
case 929:
case 1698:
case 2209:
case 1995:
case 3126:
case 588:
case 2200:
case 4062:
case 3169:
case 3911:
case 1274:
case 2950:
case 3794:
case 191:
case 2827:
case 2181:
case 3997:
case 2857:
case 2929:
case 1667:
case 4011:
case 832:
case 387:
case 1692:
case 2631:
case 2966:
case 1009:
case 3962:
case 219:
case 1642:
case 1253:
case 2136:
case 26:
case 2619:
case 1483:
case 2023:
case 3947:
case 3837:
case 3976:
case 2972:
case 853:
case 781:
case 1407:
case 1903:
case 2115:
case 2686:
case 3682:
case 2675:
case 1104:
case 1816:
case 3930:
case 59:
case 4076:
case 2053:
case 2508:
case 924:
case 2306:
case 1648:
case 1835:
case 841:
case 1880:
case 3405:
case 3271:
case 734:
case 1914:
case 155:
case 3736:
case 818:
case 1542:
case 3606:
case 2510:
case 2586:
case 1055:
case 2943:
case 3715:
case 863:
case 3375:
case 63:
case 99:
case 2430:
case 2255:
case 3386:
case 3478:
case 2439:
case 2485:
case 2575:
case 1025:
case 33:
case 3779:
case 3521:
case 1346:
case 2608:
case 207:
case 1299:
case 152:
case 2351:
case 1717:
case 2738:
case 1470:
case 1580:
case 336:
case 3674:
case 3913:
case 3417:
case 2745:
case 2984:
case 1479:
case 1589:
case 2808:
case 1535:
case 1265:
case 996:
case 1096:
case 575:
case 3031:
case 3298:
case 2337:
case 1516:
case 3540:
case 1778:
case 3292:
case 2349:
case 1415:
case 2296:
case 3537:
case 1772:
case 2340:
case 709:
case 883:
case 636:
case 2787:
case 2183:
case 3491:
case 1873:
case 3114:
case 2802:
case 488:
case 4013:
case 1848:
case 1635:
case 1063:
case 3254:
case 2917:
case 2413:
case 182:
case 1689:
case 3145:
case 805:
case 3821:
case 1139:
case 1616:
case 717:
case 1130:
case 3333:
case 3649:
case 975:
case 3707:
case 3103:
case 1300:
case 3882:
case 1309:
case 1147:
case 761:
case 3851:
case 2263:
case 429:
case 1932:
case 802:
case 3783:
case 2374:
case 2714:
case 2941:
case 2831:
case 1892:
case 792:
case 240:
case 1956:
case 1867:
case 298:
case 1671:
case 2323:
case 2657:
case 1793:
case 367:
case 3008:
case 1197:
case 3553:
case 1206:
case 3690:
case 311:
case 3523:
case 720:
case 1494:
case 1960:
case 2353:
case 2627:
case 2006:
case 568:
case 3195:
case 390:
case 3075:
case 1355:
case 2088:
case 144:
case 1766:
case 1282:
case 49:
case 2399:
case 3327:
case 3653:
case 2246:
case 357:
case 1251:
case 1720:
case 2277:
case 325:
case 1481:
case 2557:
case 1824:
case 2390:
case 1729:
case 899:
case 3010:
case 1759:
case 2664:
case 3599:
case 322:
case 30:
case 3019:
case 1750:
case 690:
case 3623:
case 1458:
case 625:
case 400:
case 657:
case 3086:
case 1422:
case 547:
case 3167:
case 397:
case 2820:
case 1394:
case 3897:
case 3214:
case 2829:
case 971:
case 2196:
case 3192:
case 2641:
case 762:
case 3198:
case 765:
case 1626:
case 1007:
case 1165:
case 1895:
case 3868:
case 697:
case 2423:
case 1669:
case 2850:
case 3990:
case 3464:
case 540:
case 2767:
case 869:
case 247:
case 3457:
case 3953:
case 3124:
case 81:
case 4023:
case 486:
case 1731:
case 3203:
case 1425:
case 2792:
case 3796:
case 537:
case 571:
case 1247:
case 2030:
case 638:
case 1276:
case 373:
case 998:
case 3341:
case 727:
case 2047:
case 134:
case 1230:
case 3072:
case 1328:
case 1526:
case 4053:
case 338:
case 1560:
case 660:
case 1569:
case 1775:
case 966:
case 2440:
case 1412:
case 3295:
case 2748:
case 2517:
case 1336:
case 710:
case 1538:
case 2805:
case 321:
case 2097:
case 139:
case 3317:
case 4074:
case 3777:
case 3173:
case 3746:
case 346:
case 1814:
case 1461:
case 1297:
case 275:
case 1379:
case 864:
case 1418:
case 2933:
case 3839:
case 3949:
case 615:
case 566:
case 4037:
case 3885:
case 1409:
case 3830:
case 3940:
case 1188:
case 3148:
case 312:
case 923:
case 2617:
case 1935:
case 1638:
case 1121:
case 1708:
case 296:
case 1887:
case 2146:
case 3384:
case 1632:
case 4040:
case 1344:
case 791:
case 4049:
case 3876:
case 1182:
case 854:
case 3433:
case 3937:
case 612:
case 2118:
case 1603:
case 1733:
case 2986:
case 3647:
case 120:
case 3676:
case 1514:
case 2919:
case 29:
case 195:
case 2406:
case 2161:
case 1687:
case 1942:
case 3305:
case 877:
case 3921:
case 437:
case 3408:
case 1948:
case 1838:
case 192:
case 2294:
case 3685:
case 586:
case 3116:
case 3343:
case 3639:
case 519:
case 2678:
case 2975:
case 3630:
case 1307:
case 1149:
case 1434:
case 3486:
case 3576:
case 3378:
case 893:
case 884:
case 2572:
case 3547:
case 608:
case 2385:
case 2643:
case 1503:
case 2252:
case 3761:
case 2281:
case 2451:
case 1477:
case 3410:
case 176:
case 2605:
case 1545:
case 744:
case 2884:
case 3269:
case 2421:
case 308:
case 3813:
case 2780:
case 3260:
case 2222:
case 3530:
case 919:
case 2376:
case 1028:
case 2488:
case 2716:
case 2258:
case 96:
case 2100:
case 55:
case 2550:
case 680:
case 3329:
case 2279:
case 3511:
case 1123:
case 3091:
case 151:
case 3238:
case 1727:
case 1204:
case 749:
case 3568:
case 3366:
case 3755:
case 2465:
case 1015:
case 2368:
case 2004:
case 3562:
case 3725:
case 2215:
case 2771:
case 1757:
case 703:
case 2311:
case 889:
case 2529:
case 1924:
case 1079:
case 466:
case 3017:
case 48:
case 1070:
case 3232:
case 816:
case 1869:
case 2659:
case 3393:
case 3611:
case 842:
case 1199:
case 1213:
case 3668:
case 1695:
case 1998:
case 2244:
case 4065:
case 2125:
case 782:
case 1856:
case 2841:
case 1044:
case 2931:
case 2620:
case 456:
case 2013:
case 3255:
case 2386:
case 2588:
case 3382:
case 1800:
case 3439:
case 4043:
case 3485:
case 3575:
case 9:
case 135:
case 23:
case 1445:
case 754:
case 1184:
case 1071:
case 2874:
case 2521:
case 2057:
case 3905:
case 3608:
case 307:
case 1342:
case 2770:
case 891:
case 3738:
case 3351:
case 4005:
case 279:
case 3321:
case 35:
case 1257:
case 3099:
case 2027:
case 1487:
case 132:
case 3510:
case 3602:
case 1546:
case 1348:
case 3586:
case 2582:
case 3833:
case 3447:
case 607:
case 2715:
case 3225:
case 1403:
case 1907:
case 686:
case 833:
case 3675:
case 66:
case 5:
case 4072:
case 619:
case 1264:
case 438:
case 3179:
case 3508:
case 3306:
case 1373:
case 3170:
case 1117:
case 2064:
case 1414:
case 2308:
case 2506:
case 319:
case 1677:
case 2132:
case 1191:
case 3023:
case 878:
case 3972:
case 2976:
case 908:
case 3115:
case 460:
case 4078:
case 2682:
case 473:
case 3929:
case 3074:
case 2997:
case 446:
case 855:
case 1354:
case 3920:
case 1563:
case 4050:
case 287:
case 1696:
case 2962:
case 3631:
case 163:
case 2156:
case 1825:
case 2665:
case 3209:
case 2126:
case 3122:
case 769:
case 3158:
case 3200:
case 2169:
case 421:
case 3950:
case 980:
case 1035:
case 1663:
case 3993:
case 3497:
case 2429:
case 2853:
case 126:
case 1080:
case 415:
case 274:
case 2101:
case 1016:
case 3040:
case 3218:
case 2752:
case 3756:
case 1596:
case 3212:
case 759:
case 1495:
case 3037:
case 1392:
case 701:
case 2331:
case 2758:
case 2235:
case 862:
case 580:
case 3864:
case 206:
case 3194:
case 3760:
case 2280:
case 371:
case 882:
case 3527:
case 3051:
case 2599:
case 2019:
case 105:
case 20:
case 2590:
case 997:
case 728:
case 1768:
case 3082:
case 1555:
case 2086:
case 290:
case 1456:
case 1525:
case 3088:
case 637:
case 1286:
case 3399:
case 2242:
case 1863:
case 1048:
case 3277:
case 248:
case 102:
case 1219:
case 3557:
case 12:
case 1797:
case 4:
case 1159:
case 1073:
case 1150:
case 640:
case 2002:
case 973:
case 3564:
case 550:
case 1958:
case 2195:
case 803:
case 1922:
case 597:
case 698:
case 938:
case 1401:
case 398:
case 44:
case 3323:
case 1120:
case 2008:
case 267:
case 849:
case 1129:
case 1915:
case 921:
case 1172:
case 512:
case 3886:
case 480:
case 1877:
case 1054:
case 2783:
case 1846:
case 366:
case 4017:
case 3374:
case 199:
case 2224:
case 3819:
case 3917:
case 2254:
case 1970:
case 2145:
case 793:
case 784:
case 2821:
case 2574:
case 3875:
case 946:
case 2333:
case 1509:
case 2904:
case 2888:
case 3296:
case 3107:
case 2292:
case 3065:
case 1231:
case 3703:
case 3340:
case 1776:
case 323:
case 1316:
case 2537:
case 521:
case 1747:
case 4084:
case 356:
case 2114:
case 1389:
case 2674:
case 236:
case 2913:
case 1105:
case 3745:
case 3808:
case 777:
case 1834:
case 731:
case 1730:
case 2540:
case 546:
case 915:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749891602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,];
var gg_b = "1749891602/";

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
