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
case 3478:
case 3172:
case 3370:
case 362:
case 3343:
case 3711:
case 1019:
case 2262:
case 2011:
case 3986:
case 3902:
case 3451:
case 3814:
case 3749:
case 955:
case 1757:
case 278:
case 3255:
case 2049:
case 2305:
case 308:
case 4084:
case 1663:
case 1193:
case 3263:
case 3819:
case 2565:
case 3744:
case 2996:
case 1380:
case 2342:
case 2173:
case 2044:
case 3841:
case 603:
case 379:
case 3945:
case 746:
case 3552:
case 1014:
case 3668:
case 135:
case 1147:
case 1268:
case 3159:
case 593:
case 196:
case 457:
case 3574:
case 1589:
case 2117:
case 2581:
case 1234:
case 463:
case 539:
case 1440:
case 3397:
case 949:
case 3639:
case 3866:
case 3579:
case 86:
case 767:
case 2750:
case 3699:
case 472:
case 943:
case 1299:
case 1258:
case 3658:
case 2291:
case 759:
case 533:
case 3671:
case 52:
case 2024:
case 1271:
case 3446:
case 2279:
case 2684:
case 3821:
case 3531:
case 1860:
case 364:
case 3323:
case 2689:
case 2427:
case 3997:
case 660:
case 3060:
case 3856:
case 3694:
case 469:
case 3729:
case 3164:
case 1294:
case 2918:
case 3485:
case 2029:
case 150:
case 1420:
case 1328:
case 3100:
case 784:
case 3004:
case 1133:
case 2704:
case 3265:
case 2905:
case 2563:
case 609:
case 2801:
case 373:
case 1809:
case 2555:
case 3253:
case 3407:
case 1980:
case 1127:
case 1653:
case 930:
case 1376:
case 841:
case 3009:
case 771:
case 2867:
case 1912:
case 3562:
case 745:
case 1701:
case 3855:
case 216:
case 3361:
case 3978:
case 1614:
case 3214:
case 1122:
case 2947:
case 3108:
case 3951:
case 3402:
case 3486:
case 167:
case 556:
case 3567:
case 657:
case 2862:
case 1063:
case 1476:
case 831:
case 128:
case 2257:
case 2403:
case 615:
case 368:
case 3241:
case 735:
case 3863:
case 2611:
case 272:
case 818:
case 1762:
case 3445:
case 543:
case 3437:
case 2128:
case 1524:
case 2422:
case 933:
case 92:
case 2333:
case 146:
case 3039:
case 1868:
case 2395:
case 2739:
case 1731:
case 3115:
case 2906:
case 3332:
case 2327:
case 1973:
case 3423:
case 2993:
case 1103:
case 2734:
case 2935:
case 2910:
case 2768:
case 1529:
case 3385:
case 2521:
case 370:
case 3068:
case 3383:
case 2933:
case 171:
case 2629:
case 2794:
case 993:
case 3660:
case 3392:
case 3190:
case 145:
case 409:
case 3094:
case 2891:
case 274:
case 1899:
case 1105:
case 1081:
case 2089:
case 58:
case 1894:
case 939:
case 3256:
case 281:
case 1656:
case 2393:
case 549:
case 2084:
case 1373:
case 3932:
case 1448:
case 3497:
case 2874:
case 2927:
case 2382:
case 2306:
case 2799:
case 3071:
case 2758:
case 1791:
case 3881:
case 2771:
case 2418:
case 3985:
case 2335:
case 2310:
case 3351:
case 1920:
case 2436:
case 3865:
case 3609:
case 3443:
case 2201:
case 3557:
case 555:
case 672:
case 1317:
case 2405:
case 1549:
case 1388:
case 2267:
case 3326:
case 1544:
case 669:
case 1480:
case 590:
case 891:
case 3853:
case 1412:
case 3604:
case 795:
case 3840:
case 3083:
case 3873:
case 710:
case 3092:
case 89:
case 1111:
case 439:
case 3623:
case 334:
case 515:
case 2389:
case 3939:
case 3782:
case 3934:
case 1073:
case 1144:
case 4005:
case 3793:
case 1883:
case 563:
case 3371:
case 3968:
case 1237:
case 3710:
case 3735:
case 2622:
case 2114:
case 1518:
case 3358:
case 290:
case 119:
case 2035:
case 2010:
case 3590:
case 3051:
case 574:
case 3078:
case 1245:
case 1798:
case 3645:
case 3888:
case 2449:
case 1505:
case 1676:
case 1441:
case 2603:
case 348:
case 1017:
case 2215:
case 2696:
case 1955:
case 17:
case 1542:
case 1878:
case 1365:
case 2859:
case 392:
case 880:
case 2512:
case 643:
case 1286:
case 1628:
case 3817:
case 3686:
case 581:
case 1754:
case 147:
case 1807:
case 2761:
case 1020:
case 2528:
case 1953:
case 1680:
case 649:
case 243:
case 1363:
case 1503:
case 801:
case 68:
case 3820:
case 2576:
case 2605:
case 1965:
case 3515:
case 500:
case 1861:
case 1355:
case 3007:
case 2636:
case 3409:
case 1129:
case 1764:
case 3643:
case 2121:
case 1522:
case 3994:
case 2424:
case 3508:
case 499:
case 823:
case 1700:
case 3339:
case 2277:
case 113:
case 1456:
case 569:
case 4003:
case 1648:
case 3795:
case 3697:
case 3032:
case 2027:
case 3334:
case 42:
case 3727:
case 2732:
case 572:
case 655:
case 1421:
case 3999:
case 325:
case 3460:
case 2785:
case 3971:
case 1533:
case 2737:
case 2635:
case 2324:
case 3500:
case 747:
case 84:
case 77:
case 2682:
case 2606:
case 2575:
case 3240:
case 969:
case 1595:
case 3516:
case 3439:
case 2163:
case 2808:
case 386:
case 2155:
case 3162:
case 3360:
case 240:
case 1283:
case 3683:
case 1321:
case 889:
case 3950:
case 2329:
case 1028:
case 430:
case 1919:
case 3876:
case 3304:
case 2520:
case 2786:
case 3569:
case 2830:
case 2254:
case 766:
case 22:
case 233:
case 4027:
case 1688:
case 1226:
case 3538:
case 4095:
case 820:
case 900:
case 1076:
case 1617:
case 3828:
case 1715:
case 1802:
case 1914:
case 1278:
case 342:
case 299:
case 110:
case 2259:
case 4033:
case 1251:
case 693:
case 456:
case 2647:
case 3564:
case 3736:
case 1790:
case 4010:
case 4035:
case 1547:
case 1319:
case 490:
case 2770:
case 2264:
case 3598:
case 3559:
case 311:
case 4093:
case 2238:
case 3705:
case 1453:
case 1207:
case 4006:
case 4082:
case 2517:
case 338:
case 2005:
case 2181:
case 293:
case 1465:
case 35:
case 2042:
case 1843:
case 2588:
case 2344:
case 1620:
case 62:
case 3220:
case 2813:
case 455:
case 1261:
case 3191:
case 3909:
case 981:
case 2924:
case 1897:
case 3685:
case 3848:
case 3025:
case 344:
case 1481:
case 2627:
case 2725:
case 3632:
case 640:
case 915:
case 2540:
case 1777:
case 1582:
case 1506:
case 957:
case 509:
case 3097:
case 1593:
case 2165:
case 385:
case 2797:
case 48:
case 1535:
case 1510:
case 1921:
case 3350:
case 3152:
case 3471:
case 3960:
case 1246:
case 1825:
case 3718:
case 2200:
case 1969:
case 2470:
case 944:
case 2378:
case 1601:
case 3201:
case 761:
case 2351:
case 2865:
case 3519:
case 41:
case 602:
case 1413:
case 2557:
case 158:
case 1753:
case 1125:
case 3405:
case 123:
case 13:
case 1667:
case 2907:
case 813:
case 357:
case 451:
case 2853:
case 3514:
case 1052:
case 3487:
case 2190:
case 2094:
case 548:
case 2221:
case 479:
case 1170:
case 3879:
case 670:
case 3089:
case 374:
case 592:
case 408:
case 3874:
case 2497:
case 3382:
case 1477:
case 2256:
case 3393:
case 1550:
case 2099:
case 3771:
case 3418:
case 95:
case 2985:
case 3112:
case 2058:
case 3624:
case 1889:
case 462:
case 3758:
case 998:
case 1972:
case 2983:
case 87:
case 777:
case 4009:
case 1102:
case 2992:
case 1300:
case 3422:
case 2437:
case 3128:
case 180:
case 3556:
case 2039:
case 74:
case 847:
case 3906:
case 2332:
case 789:
case 5:
case 2068:
case 270:
case 1560:
case 1145:
case 3910:
case 3935:
case 2385:
case 300:
case 3768:
case 1137:
case 2486:
case 2108:
case 2951:
case 1959:
case 2978:
case 4060:
case 2214:
case 3862:
case 819:
case 866:
case 1763:
case 3644:
case 2567:
case 1338:
case 2307:
case 1415:
case 3649:
case 3257:
case 2241:
case 754:
case 1954:
case 1509:
case 2445:
case 2219:
case 3611:
case 1062:
case 1211:
case 372:
case 2943:
case 2461:
case 3252:
case 470:
case 994:
case 4068:
case 2970:
case 2302:
case 2386:
case 2100:
case 3801:
case 273:
case 1067:
case 2265:
case 4034:
case 2116:
case 3563:
case 805:
case 3303:
case 3555:
case 2253:
case 1315:
case 2407:
case 3942:
case 4039:
case 3396:
case 662:
case 1464:
case 701:
case 183:
case 608:
case 2009:
case 1001:
case 402:
case 2337:
case 1400:
case 3987:
case 2699:
case 2724:
case 837:
case 73:
case 2531:
case 1539:
case 1416:
case 2925:
case 3495:
case 3684:
case 2821:
case 3427:
case 2997:
case 1107:
case 264:
case 2323:
case 651:
case 1977:
case 3689:
case 2485:
case 3274:
case 161:
case 1721:
case 2060:
case 2694:
case 2729:
case 120:
case 2574:
case 1472:
case 948:
case 1908:
case 2668:
case 2198:
case 1594:
case 2492:
case 2159:
case 2634:
case 2325:
case 1766:
case 3581:
case 154:
case 992:
case 2639:
case 1377:
case 2923:
case 3493:
case 3231:
case 3406:
case 3482:
case 1126:
case 2579:
case 55:
case 3750:
case 1571:
case 2154:
case 729:
case 2866:
case 1599:
case 544:
case 1459:
case 4058:
case 3447:
case 3336:
case 1498:
case 1662:
case 1390:
case 1844:
case 2478:
case 1719:
case 934:
case 1183:
case 2711:
case 2343:
case 287:
case 1057:
case 3305:
case 3553:
case 2749:
case 378:
case 189:
case 1313:
case 2255:
case 3342:
case 3996:
case 3140:
case 3903:
case 3565:
case 4094:
case 309:
case 673:
case 177:
case 2552:
case 3857:
case 279:
case 2572:
case 1474:
case 2685:
case 175:
case 686:
case 1583:
case 1592:
case 3877:
case 2494:
case 3924:
case 492:
case 3725:
case 2632:
case 3153:
case 1227:
case 562:
case 244:
case 3489:
case 3797:
case 1887:
case 2275:
case 448:
case 3484:
case 3573:
case 2646:
case 1479:
case 2960:
case 3200:
case 4051:
case 1233:
case 3633:
case 2152:
case 426:
case 1664:
case 3770:
case 3264:
case 1194:
case 2559:
case 3311:
case 3743:
case 904:
case 1578:
case 2880:
case 3349:
case 3181:
case 238:
case 3005:
case 551:
case 850:
case 2705:
case 2607:
case 1967:
case 1638:
case 1013:
case 836:
case 3042:
case 434:
case 1526:
case 1780:
case 895:
case 3890:
case 2742:
case 1836:
case 25:
case 1452:
case 3813:
case 339:
case 1669:
case 1805:
case 51:
case 791:
case 1896:
case 2569:
case 3815:
case 1654:
case 3911:
case 2002:
case 2086:
case 4085:
case 2304:
case 2288:
case 1367:
case 2131:
case 1957:
case 4032:
case 3949:
case 718:
case 611:
case 2828:
case 2217:
case 2796:
case 3003:
case 835:
case 970:
case 1507:
case 1030:
case 1015:
case 896:
case 564:
case 3259:
case 731:
case 3745:
case 2564:
case 3298:
case 1247:
case 638:
case 1462:
case 2309:
case 2045:
case 242:
case 1301:
case 432:
case 2500:
case 1546:
case 685:
case 3022:
case 573:
case 1235:
case 70:
case 807:
case 2516:
case 1293:
case 1431:
case 3163:
case 3575:
case 3682:
case 927:
case 1206:
case 1282:
case 2240:
case 822:
case 3723:
case 2434:
case 1822:
case 112:
case 1672:
case 3329:
case 968:
case 2162:
case 2360:
case 4061:
case 1827:
case 1974:
case 3746:
case 1218:
case 973:
case 3424:
case 442:
case 1104:
case 4045:
case 191:
case 2697:
case 2795:
case 2248:
case 1775:
case 3277:
case 3095:
case 1331:
case 527:
case 3732:
case 714:
case 1833:
case 3984:
case 1287:
case 1895:
case 3785:
case 2971:
case 2101:
case 2958:
case 2999:
case 2875:
case 3761:
case 2404:
case 1586:
case 3528:
case 2212:
case 3156:
case 884:
case 343:
case 3864:
case 692:
case 4023:
case 2515:
case 871:
case 1613:
case 1038:
case 3213:
case 2:
case 570:
case 1205:
case 3707:
case 1545:
case 2670:
case 775:
case 964:
case 4037:
case 1401:
case 1952:
case 232:
case 741:
case 3290:
case 3636:
case 2078:
case 712:
case 2888:
case 1059:
case 2590:
case 3778:
case 2051:
case 3047:
case 38:
case 3854:
case 2513:
case 632:
case 3215:
case 951:
case 3449:
case 2276:
case 3603:
case 248:
case 1457:
case 1203:
case 3898:
case 1847:
case 10:
case 3859:
case 2026:
case 3580:
case 4025:
case 444:
case 2686:
case 2228:
case 776:
case 349:
case 292:
case 91:
case 3512:
case 1893:
case 2092:
case 3783:
case 828:
case 355:
case 3119:
case 2083:
case 1806:
case 1882:
case 3792:
case 1374:
case 2157:
case 625:
case 3141:
case 234:
case 3389:
case 1525:
case 2939:
case 1835:
case 438:
case 3548:
case 979:
case 3006:
case 3082:
case 2793:
case 867:
case 3093:
case 2577:
case 3114:
case 3010:
case 2450:
case 226:
case 2371:
case 317:
case 2968:
case 4070:
case 2735:
case 1379:
case 3622:
case 3653:
case 2438:
case 3127:
case 2330:
case 1407:
case 2315:
case 1253:
case 4031:
case 480:
case 3376:
case 689:
case 1345:
case 3701:
case 283:
case 1100:
case 3328:
case 64:
case 1302:
case 1386:
case 2469:
case 2652:
case 1461:
case 1116:
case 3767:
case 1265:
case 3195:
case 991:
case 2067:
case 2977:
case 164:
case 1281:
case 2534:
case 1997:
case 1164:
case 1729:
case 2568:
case 1694:
case 1856:
case 350:
case 1658:
case 2691:
case 3299:
case 1724:
case 1699:
case 395:
case 2308:
case 1337:
case 1446:
case 3271:
case 56:
case 1671:
case 2756:
case 2284:
case 1925:
case 2539:
case 2416:
case 2126:
case 3584:
case 3473:
case 11:
case 1923:
case 1639:
case 2377:
case 2599:
case 1050:
case 2571:
case 833:
case 4052:
case 3147:
case 335:
case 2151:
case 2908:
case 1574:
case 702:
case 768:
case 254:
case 2766:
case 3589:
case 1325:
case 1634:
case 3234:
case 3850:
case 899:
case 3066:
case 1744:
case 3976:
case 24:
case 1263:
case 3193:
case 3182:
case 3106:
case 3488:
case 3380:
case 1426:
case 307:
case 2849:
case 2454:
case 1552:
case 401:
case 3110:
case 3135:
case 3312:
case 322:
case 162:
case 918:
case 2844:
case 1172:
case 4079:
case 2390:
case 2662:
case 2192:
case 3928:
case 4091:
case 2313:
case 3655:
case 3757:
case 289:
case 3041:
case 2057:
case 3417:
case 108:
case 541:
case 3480:
case 3544:
case 1326:
case 1907:
case 454:
case 2667:
case 23:
case 359:
case 2354:
case 1853:
case 3118:
case 3204:
case 420:
case 3752:
case 3920:
case 2490:
case 1351:
case 518:
case 2359:
case 1961:
case 1443:
case 1470:
case 2969:
case 3549:
case 3317:
case 2753:
case 2125:
case 531:
case 1557:
case 764:
case 2413:
case 3053:
case 941:
case 3656:
case 1256:
case 489:
case 3894:
case 2477:
case 3373:
case 4057:
case 384:
case 50:
case 3779:
case 1058:
case 2229:
case 2170:
case 2372:
case 2143:
case 2074:
case 1221:
case 371:
case 1383:
case 3260:
case 1190:
case 2900:
case 477:
case 1946:
case 3975:
case 3899:
case 1789:
case 3858:
case 2781:
case 3871:
case 104:
case 2916:
case 3081:
case 3105:
case 1034:
case 1332:
case 1266:
case 3196:
case 1130:
case 1115:
case 708:
case 601:
case 1385:
case 3529:
case 3839:
case 1068:
case 3524:
case 1437:
case 2186:
case 2102:
case 452:
case 779:
case 1983:
case 2031:
case 1039:
case 849:
case 280:
case 3731:
case 3375:
case 1241:
case 168:
case 2657:
case 2249:
case 3476:
case 2415:
case 3988:
case 1307:
case 2430:
case 1926:
case 2211:
case 751:
case 2062:
case 1863:
case 1445:
case 3762:
case 2954:
case 2369:
case 461:
case 1214:
case 3614:
case 1978:
case 1361:
case 229:
case 1855:
case 2959:
case 127:
case 367:
case 1486:
case 623:
case 1108:
case 63:
case 2504:
case 1567:
case 976:
case 2763:
case 382:
case 817:
case 353:
case 71:
case 591:
case 3063:
case 3917:
case 983:
case 1334:
case 1032:
case 2523:
case 738:
case 1727:
case 952:
case 815:
case 631:
case 3225:
case 1875:
case 1085:
case 1101:
case 3421:
case 2991:
case 59:
case 1046:
case 1733:
case 291:
case 2104:
case 1994:
case 3700:
case 3981:
case 2331:
case 2775:
case 1248:
case 1167:
case 3716:
case 1697:
case 1795:
case 3075:
case 3965:
case 1820:
case 3355:
case 2038:
case 2160:
case 2236:
case 2064:
case 3243:
case 874:
case 3270:
case 3129:
case 3764:
case 1670:
case 2545:
case 4008:
case 1409:
case 1061:
case 2720:
case 1212:
case 3124:
case 1404:
case 2502:
case 412:
case 60:
case 3953:
case 2242:
case 3363:
case 3542:
case 3878:
case 1026:
case 3088:
case 37:
case 3851:
case 2788:
case 20:
case 2352:
case 192:
case 475:
case 347:
case 3754:
case 1686:
case 1228:
case 3202:
case 3286:
case 2098:
case 0:
case 3536:
case 954:
case 2570:
case 3798:
case 3245:
case 2543:
case 1078:
case 2203:
case 2457:
case 3963:
case 3441:
case 920:
case 501:
case 3676:
case 3505:
case 2630:
case 2717:
case 2296:
case 4077:
case 800:
case 1513:
case 786:
case 691:
case 1577:
case 1706:
case 977:
case 798:
case 2773:
case 4013:
case 3883:
case 816:
case 1934:
case 2597:
case 414:
case 1735:
case 3237:
case 1968:
case 1371:
case 53:
case 1450:
case 319:
case 366:
case 1399:
case 3518:
case 4090:
case 742:
case 2072:
case 1083:
case 2806:
case 2882:
case 3772:
case 231:
case 3111:
case 2893:
case 3466:
case 2835:
case 3149:
case 2931:
case 3223:
case 1157:
case 218:
case 577:
case 3582:
case 3506:
case 3777:
case 3675:
case 2887:
case 2295:
case 2616:
case 3593:
case 1152:
case 3921:
case 3510:
case 1718:
case 3825:
case 1646:
case 2479:
case 54:
case 1471:
case 1494:
case 4054:
case 241:
case 589:
case 3285:
case 1848:
case 1572:
case 3897:
case 3956:
case 144:
case 1025:
case 3232:
case 1632:
case 612:
case 2818:
case 794:
case 15:
case 2780:
case 1742:
case 418:
case 3184:
case 3870:
case 3843:
case 337:
case 1179:
case 4072:
case 2712:
case 3620:
case 2199:
case 3314:
case 2669:
case 431:
case 1909:
case 2158:
case 1554:
case 1661:
case 1043:
case 2842:
case 1174:
case 2578:
case 111:
case 2090:
case 1598:
case 2194:
case 3319:
case 3547:
case 2551:
case 725:
case 3207:
case 3453:
case 1812:
case 2013:
case 1607:
case 901:
case 3713:
case 214:
case 2357:
case 138:
case 860:
case 1703:
case 2507:
case 3802:
case 3715:
case 3730:
case 2301:
case 491:
case 1309:
case 4000:
case 1651:
case 2462:
case 2247:
case 3251:
case 2659:
case 1304:
case 3919:
case 1086:
case 2654:
case 2561:
case 26:
case 3941:
case 3463:
case 3688:
case 2367:
case 641:
case 2822:
case 1023:
case 1434:
case 3527:
case 552:
case 675:
case 1692:
case 3292:
case 4069:
case 99:
case 212:
case 878:
case 3321:
case 1722:
case 3533:
case 276:
case 3823:
case 2282:
case 3640:
case 1273:
case 3673:
case 4038:
case 1516:
case 929:
case 3595:
case 2055:
case 3430:
case 3415:
case 3338:
case 1496:
case 3123:
case 3755:
case 1403:
case 565:
case 1649:
case 3509:
case 495:
case 3062:
case 3364:
case 267:
case 2320:
case 2428:
case 3369:
case 2614:
case 906:
case 253:
case 1862:
case 3244:
case 424:
case 826:
case 282:
case 2103:
case 1993:
case 778:
case 2196:
case 1327:
case 1906:
case 2839:
case 848:
case 1521:
case 2529:
case 100:
case 1910:
case 246:
case 709:
case 1422:
case 3102:
case 3408:
case 380:
case 1739:
case 2375:
case 3316:
case 1556:
case 1306:
case 937:
case 1382:
case 1180:
case 1927:
case 4041:
case 1084:
case 2656:
case 1393:
case 703:
case 1335:
case 2779:
case 3091:
case 1112:
case 4019:
case 3550:
case 284:
case 3889:
case 422:
case 1487:
case 3229:
case 3170:
case 3884:
case 488:
case 3372:
case 3143:
case 407:
case 1089:
case 1995:
case 3916:
case 1879:
case 2081:
case 2899:
case 2858:
case 3781:
case 832:
case 667:
case 4066:
case 163:
case 2065:
case 566:
case 3938:
case 1267:
case 3197:
case 2544:
case 2480:
case 3765:
case 2388:
case 3667:
case 496:
case 653:
case 3964:
case 157:
case 894:
case 3354:
case 1514:
case 2118:
case 1201:
case 3601:
case 3969:
case 1347:
case 1519:
case 3398:
case 2187:
case 115:
case 2920:
case 3490:
case 721:
case 2511:
case 3359:
case 2053:
case 1852:
case 3413:
case 905:
case 2317:
case 3753:
case 1541:
case 358:
case 4081:
case 1044:
case 3930:
case 2380:
case 1342:
case 919:
case 1565:
case 1903:
case 3811:
case 3454:
case 377:
case 445:
case 109:
case 2135:
case 2110:
case 2312:
case 207:
case 3714:
case 471:
case 288:
case 3390:
case 1011:
case 3662:
case 3498:
case 2928:
case 1447:
case 3192:
case 3459:
case 222:
case 3183:
case 700:
case 2041:
case 2417:
case 1305:
case 3057:
case 1049:
case 505:
case 3313:
case 3741:
case 2757:
case 2655:
case 537:
case 695:
case 3377:
case 4053:
case 2239:
case 3126:
case 947:
case 1406:
case 2584:
case 2440:
case 2473:
case 1750:
case 97:
case 3599:
case 1435:
case 716:
case 3178:
case 296:
case 772:
case 2147:
case 1922:
case 3908:
case 235:
case 459:
case 4065:
case 842:
case 1581:
case 3766:
case 2589:
case 510:
case 4063:
case 3107:
case 2948:
case 3977:
case 3824:
case 224:
case 635:
case 811:
case 2021:
case 1760:
case 1274:
case 3674:
case 715:
case 3721:
case 838:
case 361:
case 3308:
case 1987:
case 295:
case 1120:
case 3400:
case 1024:
case 2056:
case 763:
case 4055:
case 3756:
case 2475:
case 1684:
case 428:
case 3284:
case 2376:
case 2980:
case 2653:
case 3315:
case 3330:
case 622:
case 774:
case 844:
case 383:
case 3001:
case 1704:
case 2133:
case 3652:
case 3146:
case 3990:
case 2420:
case 506:
case 2809:
case 1175:
case 3067:
case 3913:
case 1563:
case 607:
case 1905:
case 2665:
case 2767:
case 688:
case 3532:
case 2527:
case 1155:
case 1723:
case 862:
case 3822:
case 605:
case 2837:
case 1808:
case 3672:
case 3585:
case 4020:
case 1272:
case 2321:
case 140:
case 2283:
case 887:
case 78:
case 808:
case 2292:
case 3008:
case 376:
case 2823:
case 1022:
case 1324:
case 982:
case 1610:
case 953:
case 1635:
case 749:
case 2533:
case 1163:
case 3431:
case 1693:
case 2356:
case 2595:
case 3206:
case 2966:
case 1606:
case 967:
case 1575:
case 2673:
case 1003:
case 2802:
case 2886:
case 2730:
case 2617:
case 2455:
case 3507:
case 1944:
case 3247:
case 1298:
case 3168:
case 755:
case 1745:
case 3698:
case 1647:
case 3659:
case 297:
case 1259:
case 3301:
case 199:
case 2914:
case 3561:
case 3654:
case 3728:
case 1830:
case 2919:
case 81:
case 3803:
case 1911:
case 536:
case 2688:
case 3367:
case 2845:
case 595:
case 36:
case 2463:
case 1344:
case 2870:
case 2184:
case 984:
case 1890:
case 3780:
case 2314:
case 3199:
case 1269:
case 3669:
case 756:
case 3158:
case 1813:
case 3901:
case 3452:
case 237:
case 3171:
case 3805:
case 2620:
case 1311:
case 466:
case 2547:
case 1264:
case 3664:
case 3551:
case 730:
case 193:
case 4073:
case 3357:
case 1181:
case 697:
case 1517:
case 971:
case 535:
case 2189:
case 3013:
case 2453:
case 1238:
case 3967:
case 610:
case 3887:
case 3748:
case 1797:
case 959:
case 507:
case 1165:
case 3295:
case 743:
case 606:
case 1484:
case 2675:
case 2582:
case 2777:
case 2825:
case 3479:
case 3600:
case 873:
case 2510:
case 1929:
case 447:
case 2285:
case 2897:
case 1877:
case 3592:
case 1087:
case 205:
case 522:
case 2366:
case 1153:
case 3818:
case 1725:
case 1489:
case 4088:
case 2481:
case 2956:
case 1872:
case 988:
case 1548:
case 3740:
case 827:
case 72:
case 219:
case 1035:
case 1010:
case 190:
case 1114:
case 1622:
case 3379:
case 613:
case 3222:
case 3608:
case 2237:
case 117:
case 2772:
case 155:
case 2111:
case 331:
case 868:
case 3806:
case 437:
case 2149:
case 3931:
case 2223:
case 318:
case 2381:
case 3835:
case 802:
case 3810:
case 2466:
case 584:
case 2851:
case 1726:
case 3788:
case 1898:
case 2365:
case 1444:
case 1580:
case 2878:
case 2542:
case 27:
case 2286:
case 2628:
case 405:
case 1512:
case 2414:
case 3352:
case 3570:
case 2798:
case 1751:
case 2245:
case 2826:
case 740:
case 2759:
case 18:
case 1411:
case 1166:
case 3717:
case 3615:
case 2353:
case 1215:
case 1696:
case 1854:
case 571:
case 935:
case 2017:
case 2441:
case 870:
case 1213:
case 1576:
case 1707:
case 1605:
case 3205:
case 2503:
case 1121:
case 2270:
case 2129:
case 924:
case 1290:
case 3690:
case 3362:
case 3236:
case 1528:
case 3069:
case 1838:
case 67:
case 2807:
case 647:
case 1156:
case 546:
case 1642:
case 3523:
case 2225:
case 2846:
case 1984:
case 1027:
case 265:
case 1687:
case 3287:
case 3979:
case 3109:
case 130:
case 1746:
case 497:
case 1618:
case 156:
case 582:
case 3000:
case 553:
case 391:
case 3104:
case 410:
case 1424:
case 3537:
case 619:
case 4076:
case 2885:
case 2075:
case 2456:
case 3016:
case 567:
case 213:
case 1095:
case 1277:
case 3677:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748332801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,];
var gg_b = "1748332801/";

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
