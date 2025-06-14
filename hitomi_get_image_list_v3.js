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
case 996:
case 1438:
case 2072:
case 2539:
case 2643:
case 865:
case 2111:
case 1002:
case 377:
case 1389:
case 2293:
case 3712:
case 1994:
case 787:
case 3371:
case 2767:
case 2091:
case 1208:
case 1136:
case 2544:
case 2047:
case 308:
case 2278:
case 2109:
case 1888:
case 2782:
case 3392:
case 3548:
case 2889:
case 3773:
case 1236:
case 745:
case 3281:
case 3318:
case 3174:
case 1279:
case 619:
case 1428:
case 3687:
case 2529:
case 1982:
case 1185:
case 3366:
case 1390:
case 3957:
case 730:
case 2444:
case 3819:
case 2455:
case 3000:
case 1126:
case 3662:
case 1967:
case 2305:
case 1356:
case 2439:
case 1744:
case 524:
case 2058:
case 4059:
case 883:
case 3480:
case 2332:
case 1611:
case 37:
case 2961:
case 3403:
case 3353:
case 3724:
case 436:
case 3557:
case 3765:
case 4035:
case 1217:
case 3123:
case 313:
case 414:
case 2679:
case 1739:
case 169:
case 2340:
case 4041:
case 3233:
case 322:
case 1494:
case 909:
case 946:
case 2252:
case 3599:
case 1755:
case 286:
case 124:
case 848:
case 424:
case 1467:
case 335:
case 3751:
case 2939:
case 312:
case 3133:
case 2955:
case 882:
case 1906:
case 1041:
case 536:
case 3069:
case 3604:
case 2685:
case 1097:
case 114:
case 2510:
case 1832:
case 469:
case 514:
case 1761:
case 1243:
case 3457:
case 136:
case 1693:
case 3503:
case 1059:
case 3580:
case 2260:
case 3223:
case 1117:
case 1840:
case 863:
case 710:
case 1190:
case 3292:
case 591:
case 2559:
case 1458:
case 1811:
case 3927:
case 2378:
case 742:
case 2486:
case 639:
case 3118:
case 2535:
case 3642:
case 1947:
case 589:
case 1156:
case 189:
case 3271:
case 2902:
case 3783:
case 1010:
case 3468:
case 2836:
case 1326:
case 1289:
case 671:
case 2464:
case 3677:
case 3098:
case 1809:
case 1175:
case 3630:
case 753:
case 85:
case 2205:
case 1256:
case 2067:
case 84:
case 307:
case 1702:
case 3284:
case 2808:
case 862:
case 3568:
case 1878:
case 2311:
case 1632:
case 2497:
case 3937:
case 2082:
case 2309:
case 2435:
case 3995:
case 3620:
case 752:
case 2214:
case 994:
case 3266:
case 897:
case 239:
case 2747:
case 3218:
case 1893:
case 378:
case 1379:
case 2791:
case 1558:
case 1640:
case 1614:
case 1263:
case 2964:
case 2843:
case 1472:
case 3916:
case 4039:
case 1741:
case 2690:
case 2352:
case 4076:
case 516:
case 2402:
case 332:
case 315:
case 3570:
case 767:
case 3896:
case 857:
case 2986:
case 1605:
case 1029:
case 1447:
case 2232:
case 541:
case 684:
case 534:
case 3427:
case 3049:
case 1688:
case 3850:
case 3527:
case 2360:
case 333:
case 3153:
case 551:
case 3731:
case 1786:
case 3024:
case 3887:
case 1343:
case 4029:
case 3495:
case 2028:
case 944:
case 1413:
case 1044:
case 2758:
case 1591:
case 3601:
case 1163:
case 2997:
case 1764:
case 1725:
case 441:
case 89:
case 2817:
case 979:
case 793:
case 434:
case 3745:
case 1572:
case 3456:
case 48:
case 1168:
case 1484:
case 195:
case 602:
case 908:
case 3740:
case 1849:
case 1116:
case 736:
case 3475:
case 1050:
case 849:
case 1720:
case 3490:
case 714:
case 3158:
case 3328:
case 1466:
case 3732:
case 2365:
case 2324:
case 977:
case 2753:
case 1418:
case 1851:
case 203:
case 2023:
case 568:
case 3258:
case 2637:
case 1492:
case 2349:
case 724:
case 1730:
case 63:
case 1518:
case 2419:
case 1683:
case 1566:
case 3839:
case 1600:
case 1953:
case 603:
case 3876:
case 2245:
case 1471:
case 202:
case 2033:
case 1268:
case 2848:
case 2351:
case 4050:
case 2401:
case 3844:
case 1087:
case 3556:
case 545:
case 2081:
case 3191:
case 2668:
case 1645:
case 1407:
case 218:
case 309:
case 628:
case 1553:
case 1719:
case 1295:
case 2430:
case 1357:
case 346:
case 3990:
case 1898:
case 487:
case 3382:
case 3625:
case 2616:
case 3009:
case 2477:
case 3011:
case 2803:
case 3975:
case 97:
case 899:
case 2200:
case 2442:
case 3956:
case 145:
case 1984:
case 455:
case 2520:
case 913:
case 3686:
case 2901:
case 3272:
case 2046:
case 2420:
case 3463:
case 321:
case 3635:
case 1971:
case 637:
case 587:
case 923:
case 3705:
case 935:
case 2373:
case 2899:
case 187:
case 2577:
case 3291:
case 228:
case 1453:
case 1812:
case 618:
case 1621:
case 280:
case 1992:
case 1303:
case 1195:
case 3113:
case 3641:
case 1004:
case 2996:
case 3436:
case 1248:
case 1762:
case 1845:
case 2224:
case 1923:
case 193:
case 3610:
case 61:
case 1030:
case 3228:
case 660:
case 1574:
case 22:
case 1077:
case 3508:
case 3943:
case 3864:
case 3138:
case 1787:
case 2950:
case 3206:
case 726:
case 2369:
case 3526:
case 2515:
case 1042:
case 272:
case 2151:
case 4020:
case 1546:
case 2321:
case 205:
case 1831:
case 2657:
case 716:
case 2251:
case 672:
case 876:
case 2234:
case 192:
case 567:
case 2345:
case 3408:
case 273:
case 2699:
case 2354:
case 1148:
case 167:
case 2165:
case 1612:
case 2331:
case 804:
case 1821:
case 2053:
case 260:
case 3897:
case 21:
case 3032:
case 3485:
case 3579:
case 3841:
case 3536:
case 734:
case 3267:
case 354:
case 46:
case 3005:
case 2587:
case 3793:
case 410:
case 3629:
case 543:
case 1715:
case 2084:
case 3194:
case 1299:
case 617:
case 1337:
case 3088:
case 152:
case 2198:
case 3661:
case 442:
case 2562:
case 3313:
case 3282:
case 520:
case 3517:
case 2066:
case 3443:
case 1395:
case 2496:
case 4019:
case 638:
case 1651:
case 2173:
case 915:
case 453:
case 3802:
case 1280:
case 2092:
case 3985:
case 2837:
case 1523:
case 443:
case 3182:
case 3655:
case 3639:
case 542:
case 379:
case 2781:
case 1800:
case 789:
case 2462:
case 3417:
case 3391:
case 2071:
case 420:
case 933:
case 1624:
case 2550:
case 627:
case 1199:
case 142:
case 90:
case 1946:
case 2895:
case 344:
case 3711:
case 553:
case 488:
case 3372:
case 110:
case 2721:
case 2034:
case 232:
case 1823:
case 183:
case 548:
case 3402:
case 1945:
case 2769:
case 1500:
case 3352:
case 759:
case 3964:
case 1387:
case 1583:
case 1177:
case 3675:
case 4048:
case 2427:
case 60:
case 2595:
case 458:
case 824:
case 583:
case 927:
case 148:
case 1954:
case 633:
case 1684:
case 2601:
case 3758:
case 1230:
case 2495:
case 3935:
case 448:
case 2153:
case 2323:
case 1833:
case 3689:
case 2754:
case 582:
case 225:
case 2745:
case 1768:
case 749:
case 1242:
case 1400:
case 632:
case 938:
case 3817:
case 1716:
case 3502:
case 483:
case 1692:
case 1350:
case 2437:
case 1120:
case 3222:
case 3941:
case 2619:
case 2470:
case 2073:
case 3535:
case 2642:
case 2118:
case 3486:
case 972:
case 1431:
case 4057:
case 1219:
case 3378:
case 1795:
case 2292:
case 3559:
case 1080:
case 1304:
case 2346:
case 1521:
case 92:
case 1737:
case 2677:
case 3425:
case 2416:
case 565:
case 2700:
case 3836:
case 3597:
case 598:
case 2783:
case 2271:
case 400:
case 3105:
case 1545:
case 3885:
case 100:
case 371:
case 3441:
case 91:
case 3288:
case 1469:
case 960:
case 207:
case 3808:
case 2284:
case 1099:
case 2171:
case 3067:
case 799:
case 1900:
case 4080:
case 2381:
case 3459:
case 2815:
case 3826:
case 2218:
case 339:
case 3747:
case 3214:
case 1846:
case 1119:
case 465:
case 2266:
case 3663:
case 2620:
case 1531:
case 1057:
case 1727:
case 500:
case 3082:
case 3435:
case 3309:
case 1748:
case 623:
case 2054:
case 1262:
case 49:
case 2842:
case 1473:
case 2724:
case 2031:
case 185:
case 2765:
case 1196:
case 937:
case 3961:
case 2403:
case 557:
case 27:
case 3058:
case 2480:
case 1320:
case 1512:
case 2830:
case 640:
case 776:
case 157:
case 1150:
case 222:
case 918:
case 3340:
case 3636:
case 612:
case 1681:
case 1807:
case 250:
case 635:
case 2045:
case 3410:
case 3679:
case 240:
case 59:
case 761:
case 3685:
case 3510:
case 3152:
case 1250:
case 980:
case 2499:
case 4016:
case 1342:
case 3939:
case 212:
case 3608:
case 2751:
case 928:
case 1412:
case 826:
case 2734:
case 2021:
case 650:
case 235:
case 223:
case 1924:
case 1965:
case 1162:
case 2615:
case 2503:
case 2948:
case 67:
case 3863:
case 3944:
case 19:
case 2749:
case 851:
case 3767:
case 2696:
case 2371:
case 2712:
case 3293:
case 4037:
case 3910:
case 1215:
case 277:
case 1451:
case 1623:
case 163:
case 93:
case 690:
case 301:
case 3576:
case 3643:
case 3111:
case 3072:
case 1998:
case 3539:
case 170:
case 1866:
case 1027:
case 1449:
case 2650:
case 3461:
case 3875:
case 3782:
case 2903:
case 1204:
case 889:
case 3278:
case 2980:
case 1757:
case 1565:
case 1524:
case 3856:
case 891:
case 44:
case 15:
case 2274:
case 563:
case 3544:
case 3091:
case 3444:
case 3178:
case 364:
case 14:
case 45:
case 2366:
case 1703:
case 3529:
case 2174:
case 608:
case 902:
case 1465:
case 4027:
case 975:
case 2281:
case 1633:
case 3439:
case 3305:
case 3193:
case 2662:
case 2384:
case 1912:
case 2000:
case 3617:
case 677:
case 54:
case 1551:
case 1037:
case 3388:
case 2798:
case 290:
case 3211:
case 2146:
case 3746:
case 581:
case 3827:
case 3198:
case 1075:
case 3450:
case 4089:
case 1552:
case 1726:
case 327:
case 1056:
case 2005:
case 2629:
case 2793:
case 1110:
case 1847:
case 3383:
case 2802:
case 1708:
case 199:
case 1460:
case 3173:
case 830:
case 2936:
case 3774:
case 3018:
case 679:
case 2014:
case 845:
case 1785:
case 2282:
case 181:
case 2517:
case 700:
case 3562:
case 4090:
case 481:
case 2676:
case 2391:
case 3781:
case 279:
case 338:
case 855:
case 3904:
case 3870:
case 3596:
case 2655:
case 1606:
case 3092:
case 2372:
case 1628:
case 3895:
case 244:
case 3298:
case 984:
case 1813:
case 2644:
case 2294:
case 1993:
case 4075:
case 765:
case 3550:
case 3112:
case 654:
case 798:
case 3915:
case 3071:
case 895:
case 2943:
case 1244:
case 574:
case 1409:
case 1161:
case 2508:
case 868:
case 32:
case 3007:
case 2585:
case 1578:
case 3265:
case 1129:
case 149:
case 1717:
case 305:
case 4063:
case 1239:
case 3733:
case 549:
case 1341:
case 2752:
case 506:
case 694:
case 1397:
case 2022:
case 3950:
case 2138:
case 1511:
case 474:
case 1139:
case 3234:
case 1493:
case 2040:
case 3251:
case 2426:
case 748:
case 2859:
case 939:
case 559:
case 1364:
case 3987:
case 1155:
case 2106:
case 1952:
case 1063:
case 3657:
case 2238:
case 2358:
case 1144:
case 1261:
case 2032:
case 1743:
case 2897:
case 360:
case 449:
case 1667:
case 3053:
case 3331:
case 1229:
case 3723:
case 1509:
case 2760:
case 3616:
case 2625:
case 2382:
case 4008:
case 3477:
case 2009:
case 1914:
case 3792:
case 2213:
case 888:
case 2990:
case 3430:
case 820:
case 1079:
case 2191:
case 2563:
case 2686:
case 3312:
case 3771:
case 3283:
case 2367:
case 1905:
case 621:
case 843:
case 1540:
case 4026:
case 2975:
case 1756:
case 853:
case 1202:
case 1026:
case 1440:
case 3542:
case 2788:
case 1882:
case 2272:
case 3901:
case 2463:
case 770:
case 842:
case 3919:
case 2641:
case 3766:
case 2697:
case 2078:
case 646:
case 810:
case 328:
case 609:
case 3074:
case 86:
case 3577:
case 1008:
case 2291:
case 1297:
case 1355:
case 561:
case 1241:
case 2589:
case 1922:
case 1125:
case 3269:
case 3501:
case 404:
case 1405:
case 2456:
case 1339:
case 3154:
case 3023:
case 303:
case 2060:
case 3753:
case 3519:
case 3324:
case 476:
case 33:
case 2732:
case 1838:
case 1414:
case 2158:
case 161:
case 2490:
case 3930:
case 296:
case 3254:
case 2876:
case 461:
case 1017:
case 1514:
case 2839:
case 3707:
case 1329:
case 1286:
case 3670:
case 3419:
case 892:
case 1806:
case 2258:
case 3349:
case 1932:
case 696:
case 1361:
case 1135:
case 104:
case 1828:
case 2:
case 3695:
case 1505:
case 2338:
case 1141:
case 1613:
case 964:
case 3401:
case 3169:
case 1264:
case 2963:
case 2844:
case 2052:
case 3351:
case 1588:
case 785:
case 3033:
case 929:
case 3848:
case 3245:
case 1940:
case 3121:
case 2308:
case 2947:
case 3454:
case 398:
case 2991:
case 365:
case 439:
case 1378:
case 1114:
case 2622:
case 2458:
case 877:
case 1559:
case 3080:
case 166:
case 808:
case 291:
case 1425:
case 2972:
case 3201:
case 3737:
case 2175:
case 2809:
case 3569:
case 949:
case 3315:
case 2326:
case 2289:
case 1105:
case 1393:
case 2010:
case 3445:
case 1902:
case 289:
case 3607:
case 1772:
case 300:
case 3101:
case 3469:
case 2275:
case 171:
case 1441:
case 3099:
case 1808:
case 3983:
case 3421:
case 2256:
case 466:
case 1205:
case 1791:
case 2336:
case 1459:
case 2558:
case 1747:
case 2379:
case 3057:
case 1663:
case 3846:
case 3119:
case 1214:
case 2913:
case 1435:
case 3727:
case 4006:
case 999:
case 3945:
case 3823:
case 383:
case 813:
case 1690:
case 3666:
case 1122:
case 234:
case 2614:
case 1925:
case 2472:
case 3220:
case 981:
case 3387:
case 2688:
case 2061:
case 626:
case 850:
case 3954:
case 4028:
case 2029:
case 2605:
case 484:
case 1656:
case 1758:
case 2044:
case 2413:
case 2591:
case 616:
case 1935:
case 3230:
case 226:
case 1959:
case 840:
case 772:
case 3048:
case 705:
case 382:
case 3833:
case 1360:
case 3483:
case 2039:
case 4038:
case 2572:
case 1140:
case 3400:
case 2076:
case 3768:
case 3242:
case 3692:
case 3716:
case 2764:
case 641:
case 584:
case 1006:
case 1222:
case 1941:
case 2163:
case 2994:
case 1555:
case 1767:
case 3215:
case 728:
case 3451:
case 2002:
case 1910:
case 1576:
case 3301:
case 780:
case 1539:
case 3866:
case 1072:
case 2438:
case 3998:
case 1643:
case 2888:
case 1461:
case 3027:
case 3524:
case 3757:
case 3565:
case 1278:
case 501:
case 2285:
case 119:
case 2528:
case 35:
case 464:
case 3884:
case 1544:
case 2652:
case 4091:
case 3104:
case 2390:
case 904:
case 3780:
case 1444:
case 807:
case 2982:
case 3703:
case 1529:
case 4047:
case 3095:
case 1178:
case 34:
case 164:
case 3871:
case 129:
case 2279:
case 1561:
case 362:
case 2236:
case 1193:
case 2538:
case 4072:
case 2356:
case 1305:
case 1794:
case 3912:
case 529:
case 401:
case 3892:
case 976:
case 564:
case 3551:
case 3037:
case 3534:
case 1211:
case 1455:
case 2406:
case 775:
case 1929:
case 2582:
case 385:
case 2086:
case 702:
case 2143:
case 2611:
case 3949:
case 832:
case 186:
case 2755:
case 3320:
case 3287:
case 2938:
case 3016:
case 2025:
case 1636:
case 1340:
case 3934:
case 2739:
case 1510:
case 2678:
case 214:
case 1322:
case 2097:
case 1685:
case 3187:
case 624:
case 2832:
case 2041:
case 3250:
case 73:
case 2906:
case 2594:
case 1152:
case 347:
case 3598:
case 3342:
case 2467:
case 3674:
case 486:
case 3853:
case 3412:
case 1976:
case 3162:
case 4058:
case 3965:
case 3924:
case 1260:
case 2243:
case 1863:
case 3646:
case 3330:
case 236:
case 39:
case 3377:
case 2698:
case 3409:
case 1816:
case 2030:
case 306:
case 4053:
case 349:
case 1224:
case 572:
case 1265:
case 3129:
case 1007:
case 3694:
case 667:
case 2248:
case 1868:
case 3239:
case 2546:
case 692:
case 998:
case 172:
case 896:
case 2854:
case 2042:
case 1151:
case 965:
case 2673:
case 3858:
case 1515:
case 52:
case 1680:
case 2787:
case 374:
case 2933:
case 1234:
case 573:
case 3139:
case 1345:
case 2368:
case 3176:
case 1415:
case 472:
case 3364:
case 1987:
case 3682:
case 560:
case 51:
case 3952:
case 3063:
case 900:
case 3261:
case 2581:
case 3144:
case 359:
case 3743:
case 4007:
case 3478:
case 11:
case 2612:
case 1165:
case 3229:
case 1124:
case 42:
case 1962:
case 693:
case 2821:
case 2474:
case 1354:
case 2370:
case 66:
case 809:
case 2649:
case 3075:
case 1450:
case 1827:
case 1198:
case 1084:
case 642:
case 3891:
case 3726:
case 2715:
case 3552:
case 1300:
case 3847:
case 1383:
case 846:
case 288:
case 1173:
case 4092:
case 3460:
case 2423:
case 243:
case 1496:
case 1018:
case 2981:
case 2634:
case 3785:
case 1066:
case 3872:
case 438:
case 3638:
case 2257:
case 2395:
case 1562:
case 643:
case 3736:
case 1273:
case 2800:
case 1781:
case 517:
case 3779:
case 138:
case 2883:
case 1596:
case 2203:
case 1904:
case 2157:
case 1092:
case 2327:
case 2280:
case 3978:
case 766:
case 3560:
case 253:
case 620:
case 3628:
case 958:
case 652:
case 1298:
case 2001:
case 3813:
case 3452:
case 3089:
case 1648:
case 1550:
case 3302:
case 2433:
case 3993:
case 982:
case 1071:
case 688:
case 1915:
case 2624:
case 2665:
case 2720:
case 3763:
case 3125:
case 3922:
case 53:
case 1627:
case 3691:
case 1501:
case 95:
case 3339:
case 1942:
case 1221:
case 503:
case 1145:
case 2851:
case 1023:
case 2907:
case 3259:
case 1324:
case 1365:
case 3186:
case 1131:
case 2418:
case 2096:
case 1753:
case 1519:
case 13:
case 3838:
case 3414:
case 3043:
case 1930:
case 3344:
case 3017:
case 3159:
case 894:
case 2953:
case 2062:
case 1231:
case 3286:
case 2566:
case 2683:
case 3514:
case 376:
case 1419:
case 2518:
case 3361:
case 3135:
case 2777:
case 1349:
case 3932:
case 2492:
case 1637:
case 28:
case 1695:
case 2087:
case 1401:
case 3225:
case 1169:
case 3613:
case 94:
case 2584:
case 2742:
case 2268:
case 695:
case 3588:
case 1351:
case 668:
case 3940:
case 1245:
case 3914:
case 2127:
case 1477:
case 957:
case 2553:
case 854:
case 2357:
case 2295:
case 3079:
case 118:
case 537:
case 2645:
case 480:
case 2918:
case 687:
case 2984:
case 245:
case 2631:
case 2399:
case 2873:
case 1200:
case 985:
case 764:
case 3540:
case 1880:
case 2270:
case 230:
case 1183:
case 3522:
case 2015:
case 3202:
case 2971:
case 1100:
case 719:
case 2137:
case 580:
case 437:
case 1398:
case 2170:
case 99:
case 630:
case 879:
case 1901:
case 2227:
case 3790:
case 2669:
case 3432:
case 2992:
case 2303:
case 2812:
case 2453:
case 128:
case 2621:
case 1899:
case 1373:
case 3008:
case 1577:
case 287:
case 1480:
case 3744:
case 7:
case 1403:
case 2949:
case 17:
case 3611:
case 1765:
case 1031:
case 1724:
case 1353:
case 2196:
case 113:
case 1123:
case 3582:
case 945:
case 1842:
case 2262:
case 2748:
case 3739:
case 2807:
case 1045:
case 647:
case 3776:
case 1233:
case 122:
case 412:
case 2150:
case 3363:
case 2287:
case 435:
case 1830:
case 324:
case 1021:
case 2853:
case 987:
case 523:
case 2674:
case 1133:
case 112:
case 2598:
case 1751:
case 3594:
case 1069:
case 422:
case 3041:
case 3906:
case 140:
case 2187:
case 3832:
case 450:
case 314:
case 3678:
case 4045:
case 413:
case 540:
case 3761:
case 955:
case 4054:
case 2646:
case 1457:
case 2330:
case 3243:
case 512:
case 3729:
case 1503:
case 685:
case 47:
case 1307:
case 2965:
case 2924:
case 2162:
case 3059:
case 1580:
case 2866:
case 2998:
case 3438:
case 3814:
case 2301:
case 4000:
case 2451:
case 177:
case 3389:
case 2215:
case 263:
case 2799:
case 1696:
case 3506:
case 697:
case 2818:
case 2434:
case 1712:
case 1181:
case 577:
case 25:
case 995:
case 3805:
case 2319:
case 721:
case 3285:
case 64:
case 2757:
case 1650:
case 1392:
case 2027:
case 2204:
case 1903:
case 1281:
case 2549:
case 871:
case 3108:
case 2633:
case 3279:
case 1174:
case 65:
case 2424:
case 3185:
case 24:
case 590:
case 3428:
case 2095:
case 2780:
case 1801:
case 670:
case 3406:
case 2070:
case 1146:
case 1819:
case 3375:
case 2551:
case 190:
case 1384:
case 2115:
case 663:
case 1662:
case 1000:
case 2912:
case 1083:
case 3538:
case 3356:
case 3472:
case 3263:
case 2387:
case 3797:
case 2666:
case 425:
case 2583:
case 3741:
case 2142:
case 132:
case 1333:
case 1537:
case 3860:
case 2823:
case 1051:
case 283:
case 1896:
case 943:
case 115:
case 1570:
case 2618:
case 988:
case 2931:
case 682:
case 3491:
case 2362:
case 3447:
case 1595:
case 532:
case 3605:
case 1107:
case 1253:
case 2130:
case 4024:
case 952:
case 794:
case 2177:
case 3061:
case 1850:
case 433:
case 3688:
case 1323:
case 525:
case 2048:
case 282:
case 1527:
case 1731:
case 2396:
case 2671:
case 1153:
case 3547:
case 326:
case 2230:
case 1887:
case 3343:
case 3591:
case 3852:
case 953:
case 2120:
case 3163:
case 2969:
case 3055:
case 415:
case 1619:
case 2716:
case 432:
case 50:
case 2350:
case 2692:
case 1862:
case 683:
case 2921:
case 3039:
case 533:
case 2483:
case 2304:
case 3190:
case 478:
case 1927:
case 3622:
case 2795:
case 3811:
case 2003:
case 1374:
case 1118:
case 2454:
case 801:
case 1073:
case 3947:
case 3308:
case 1642:
case 2445:
case 1783:
case 389:
case 3156:
case 3289:
case 1184:
case 2569:
case 2881:
case 993:
case 779:
case 407:
case 2201:
case 1416:
case 1677:
case 600:
case 2521:
case 4012:
case 1346:
case 864:
case 1171:
case 1012:
case 2900:
case 3256:
case 2421:
case 578:
case 1284:
case 107:
case 3189:
case 2099:
case 1516:
case 1804:
case 3275:
case 2469:
case 2101:
case 1937:
case 3878:
case 200:
case 1192:
case 3290:
case 2846:
case 3379:
case 3893:
case 3336:
case 1381:
case 754:
case 3558:
case 1815:
case 1191:
case 2036:
case 2894:
case 3918:
case 1147:
case 1810:
case 2079:
case 4078:
case 2532:
case 3295:
case 511:
case 1382:
case 1625:
case 3127:
case 924:
case 3898:
case 827:
case 3966:
case 1172:
case 2422:
case 3270:
case 2988:
case 546:
case 111:
case 2658:
case 2905:
case 1956:
case 421:
case 3654:
case 1686:
case 1563:
case 345:
case 1272:
case 355:
case 838:
case 3137:
case 121:
case 2775:
case 2882:
case 1788:
case 556:
case 708:
case 1659:
case 411:
case 3971:
case 2202:
case 1705:
case 1093:
case 4009:
case 1291:
case 2008:
case 446:
case 2867:
case 1247:
case 156:
case 3812:
case 3453:
case 3195:
case 409:
case 3303:
case 3992:
case 1078:
case 2432:
case 3507:
case 3669:
case 914:
case 1829:
case 82:
case 723:
case 1456:
case 2339:
case 2405:
case 2922:
case 1861:
case 1475:
case 3116:
case 3571:
case 2297:
case 2763:
case 596:
case 3720:
case 604:
case 1158:
case 1490:
case 740:
case 676:
case 2838:
case 1732:
case 805:
case 2672:
case 3834:
case 3418:
case 712:
case 3907:
case 1602:
case 3592:
case 2932:
case 2135:
case 4060:
case 3730:
case 1855:
case 2806:
case 1839:
case 2514:
case 3683:
case 2286:
case 1876:
case 3953:
case 496:
case 750:
case 3600:
case 3824:
case 2940:
case 81:
case 3865:
case 1489:
case 1575:
case 3268:
case 77:
case 1963:
case 2225:
case 3216:
case 2828:
case 204:
case 1338:
case 1556:
case 2505:
case 1793:
case 1629:
case 2056:
case 388:
case 1267:
case 2110:
case 2847:
case 154:
case 2552:
case 3299:
case 1194:
case 2891:
case 2726:
case 2911:
case 3337:
case 2075:
case 320:
case 3370:
case 2090:
case 1282:
case 3704:
case 3257:
case 2638:
case 2909:
case 1778:
case 1014:
case 2872:
case 3634:
case 3981:
case 3423:
case 299:
case 1802:
case 554:
case 1979:
case 1709:
case 2560:
case 1985:
case 681:
case 3280:
case 3327:
case 3157:
case 3203:
case 2606:
case 1639:
case 951:
case 2779:
case 1391:
case 699:
case 2736:
case 1167:
case 880:
case 2993:
case 579:
case 342:
case 3199:
case 4088:
case 2302:
case 1644:
case 2628:
case 144:
case 1711:
case 454:
case 828:
case 3248:
case 3481:
case 2359:
case 2717:
case 2578:
case 4032:
case 1479:
case 2960:
case 393:
case 249:
case 1228:
case 3698:
case 1508:
case 2161:
case 3077:
case 2409:
case 274:
case 1022:
case 2397:
case 3787:
case 1138:
case 1526:
case 70:
case 803:
case 494:
case 3831:
case 83:
case 733:
case 2239:
case 674:
case 1238:
case 3020:
case 194:
case 1835:
case 2364:
case 2325:
case 3316:
case 2682:
case 3368:
case 1859:
case 4022:
case 2493:
case 392:
case 715:
case 367:
case 3821:
case 649:
case 3796:
case 3474:
case 2667:
case 732:
case 2386:
case 594:
case 1032:
case 2478:
case 875:
case 259:
case 1897:
case 1536:
case 1358:
case 2261:
case 1841:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749934801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,];
var gg_b = "1749934801/";

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
