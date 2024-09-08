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
case 1487:
case 1049:
case 737:
case 2155:
case 299:
case 2288:
case 3866:
case 1091:
case 3786:
case 3545:
case 1172:
case 1422:
case 1230:
case 3625:
case 211:
case 2804:
case 3805:
case 712:
case 90:
case 4057:
case 3888:
case 1249:
case 3078:
case 2342:
case 3241:
case 2984:
case 2088:
case 3872:
case 953:
case 2908:
case 1177:
case 2061:
case 3767:
case 1690:
case 3559:
case 856:
case 660:
case 3455:
case 3199:
case 3623:
case 2828:
case 3080:
case 3714:
case 2076:
case 350:
case 2209:
case 1562:
case 2402:
case 301:
case 158:
case 508:
case 324:
case 205:
case 1822:
case 4037:
case 1463:
case 747:
case 2348:
case 234:
case 305:
case 2503:
case 2873:
case 63:
case 1925:
case 3228:
case 2142:
case 3608:
case 3057:
case 3251:
case 563:
case 1039:
case 138:
case 2974:
case 1185:
case 2973:
case 3904:
case 2265:
case 2422:
case 1199:
case 1364:
case 1414:
case 4042:
case 3157:
case 1105:
case 995:
case 3154:
case 2851:
case 2822:
case 661:
case 1500:
case 3555:
case 1319:
case 1313:
case 3485:
case 2318:
case 3715:
case 1174:
case 2999:
case 2953:
case 1035:
case 159:
case 3502:
case 1833:
case 956:
case 2294:
case 1193:
case 1830:
case 358:
case 3364:
case 892:
case 2772:
case 4065:
case 3104:
case 2737:
case 2686:
case 3585:
case 171:
case 3324:
case 1647:
case 2763:
case 3660:
case 2493:
case 3607:
case 823:
case 2234:
case 1639:
case 2108:
case 4020:
case 851:
case 3409:
case 2832:
case 2634:
case 2539:
case 3544:
case 1893:
case 3705:
case 418:
case 1610:
case 3011:
case 1334:
case 495:
case 1787:
case 1619:
case 986:
case 1661:
case 1338:
case 2287:
case 1066:
case 529:
case 494:
case 1582:
case 2123:
case 560:
case 831:
case 3932:
case 487:
case 1811:
case 3137:
case 1768:
case 901:
case 3988:
case 2484:
case 3567:
case 1187:
case 2143:
case 1501:
case 1874:
case 1112:
case 406:
case 478:
case 1549:
case 4027:
case 2534:
case 2196:
case 4044:
case 214:
case 3481:
case 2359:
case 2446:
case 2313:
case 113:
case 2975:
case 2720:
case 3393:
case 1553:
case 2335:
case 2674:
case 490:
case 3420:
case 3681:
case 4075:
case 3596:
case 2038:
case 2023:
case 3839:
case 265:
case 3488:
case 1134:
case 915:
case 1259:
case 978:
case 3194:
case 2087:
case 3571:
case 3388:
case 553:
case 101:
case 3800:
case 716:
case 2568:
case 3974:
case 1531:
case 3682:
case 2485:
case 2184:
case 4022:
case 345:
case 3096:
case 1458:
case 98:
case 1128:
case 2922:
case 1950:
case 3184:
case 1921:
case 2777:
case 1140:
case 3947:
case 1176:
case 1980:
case 2558:
case 3631:
case 2238:
case 532:
case 528:
case 3627:
case 2105:
case 3811:
case 860:
case 1701:
case 2255:
case 3252:
case 1784:
case 2346:
case 444:
case 562:
case 3407:
case 1347:
case 1243:
case 2008:
case 3683:
case 3125:
case 979:
case 3614:
case 1397:
case 2855:
case 1385:
case 3422:
case 669:
case 3581:
case 2917:
case 3177:
case 2744:
case 3777:
case 1232:
case 3919:
case 3894:
case 3230:
case 2223:
case 1593:
case 3003:
case 2693:
case 2217:
case 2389:
case 3687:
case 924:
case 4005:
case 1986:
case 2723:
case 874:
case 624:
case 450:
case 1552:
case 3896:
case 1740:
case 2282:
case 3889:
case 3301:
case 4064:
case 2444:
case 1330:
case 2312:
case 3667:
case 1175:
case 2261:
case 2681:
case 905:
case 2736:
case 1420:
case 990:
case 755:
case 822:
case 40:
case 469:
case 3595:
case 2390:
case 85:
case 2631:
case 587:
case 550:
case 2081:
case 366:
case 962:
case 666:
case 1479:
case 379:
case 2497:
case 3905:
case 3809:
case 1262:
case 2893:
case 2585:
case 773:
case 2150:
case 3415:
case 3007:
case 2411:
case 3227:
case 3895:
case 23:
case 71:
case 2887:
case 3156:
case 608:
case 1525:
case 3986:
case 2926:
case 2264:
case 1310:
case 1713:
case 617:
case 1180:
case 3611:
case 2695:
case 2406:
case 3321:
case 3290:
case 2711:
case 4003:
case 3288:
case 1889:
case 546:
case 2604:
case 772:
case 898:
case 1805:
case 2872:
case 2936:
case 1277:
case 2375:
case 3640:
case 1923:
case 999:
case 1159:
case 1959:
case 3799:
case 446:
case 913:
case 1245:
case 1580:
case 2393:
case 454:
case 377:
case 226:
case 1758:
case 3539:
case 600:
case 4077:
case 19:
case 1556:
case 3834:
case 3849:
case 3002:
case 2513:
case 2126:
case 2333:
case 819:
case 1158:
case 523:
case 1043:
case 2504:
case 4001:
case 1365:
case 3103:
case 491:
case 895:
case 3159:
case 3165:
case 4000:
case 3384:
case 3309:
case 2443:
case 2746:
case 472:
case 2889:
case 1569:
case 1650:
case 188:
case 1962:
case 2266:
case 425:
case 2131:
case 2734:
case 925:
case 3862:
case 54:
case 2861:
case 1908:
case 1617:
case 3320:
case 129:
case 3098:
case 500:
case 798:
case 1083:
case 336:
case 1585:
case 1366:
case 1578:
case 1074:
case 672:
case 2195:
case 879:
case 2041:
case 3886:
case 233:
case 2852:
case 1308:
case 2845:
case 2580:
case 3912:
case 1404:
case 1467:
case 1142:
case 2966:
case 3985:
case 3162:
case 1252:
case 2923:
case 287:
case 1063:
case 1633:
case 2152:
case 449:
case 3412:
case 1646:
case 1451:
case 2689:
case 2281:
case 3119:
case 3621:
case 3387:
case 2972:
case 53:
case 2357:
case 3780:
case 1139:
case 1974:
case 575:
case 3302:
case 1652:
case 501:
case 30:
case 1928:
case 2956:
case 220:
case 3389:
case 3672:
case 2992:
case 878:
case 468:
case 2459:
case 1107:
case 927:
case 394:
case 1773:
case 3135:
case 3556:
case 1265:
case 1261:
case 1103:
case 2682:
case 1637:
case 2204:
case 2380:
case 1994:
case 2915:
case 2951:
case 329:
case 3131:
case 1382:
case 928:
case 2526:
case 3326:
case 2933:
case 3260:
case 3620:
case 2754:
case 3132:
case 3641:
case 2284:
case 625:
case 2182:
case 635:
case 1783:
case 1953:
case 2892:
case 2173:
case 2963:
case 3487:
case 242:
case 1775:
case 761:
case 2698:
case 3698:
case 3989:
case 3433:
case 1178:
case 2900:
case 264:
case 891:
case 2587:
case 2345:
case 843:
case 231:
case 3649:
case 2652:
case 3362:
case 3004:
case 705:
case 934:
case 2103:
case 353:
case 1217:
case 333:
case 3280:
case 2812:
case 3679:
case 3256:
case 2127:
case 583:
case 2237:
case 2320:
case 2220:
case 1861:
case 3513:
case 1917:
case 3118:
case 2741:
case 1256:
case 3804:
case 1266:
case 272:
case 2761:
case 1998:
case 2810:
case 2765:
case 848:
case 3841:
case 1540:
case 1053:
case 902:
case 1272:
case 1742:
case 1086:
case 2994:
case 909:
case 3532:
case 865:
case 1511:
case 2277:
case 441:
case 681:
case 1789:
case 448:
case 119:
case 800:
case 1579:
case 3933:
case 3967:
case 229:
case 3753:
case 3366:
case 2212:
case 1166:
case 3815:
case 160:
case 37:
case 1823:
case 3855:
case 930:
case 1864:
case 3643:
case 1608:
case 3741:
case 3908:
case 726:
case 78:
case 2668:
case 2981:
case 835:
case 1384:
case 3186:
case 310:
case 652:
case 2545:
case 1038:
case 3574:
case 3339:
case 3483:
case 59:
case 1837:
case 2239:
case 3950:
case 3114:
case 2803:
case 210:
case 2476:
case 2376:
case 2516:
case 1586:
case 2525:
case 3315:
case 3515:
case 2471:
case 2156:
case 488:
case 1519:
case 1870:
case 1233:
case 485:
case 2305:
case 629:
case 521:
case 82:
case 1940:
case 2715:
case 861:
case 693:
case 4067:
case 3958:
case 1340:
case 170:
case 3024:
case 3547:
case 2630:
case 3434:
case 1472:
case 3613:
case 378:
case 1943:
case 3758:
case 2058:
case 3784:
case 519:
case 3812:
case 1855:
case 3490:
case 2829:
case 4093:
case 3771:
case 768:
case 3982:
case 2799:
case 2169:
case 1417:
case 1170:
case 1064:
case 2939:
case 1555:
case 1288:
case 1738:
case 2113:
case 1621:
case 1954:
case 2573:
case 873:
case 2962:
case 1257:
case 2860:
case 2456:
case 4078:
case 1418:
case 626:
case 451:
case 3725:
case 3331:
case 1991:
case 2198:
case 3153:
case 473:
case 2071:
case 3774:
case 677:
case 3597:
case 3037:
case 1929:
case 682:
case 1818:
case 396:
case 961:
case 1077:
case 1240:
case 3072:
case 2053:
case 3376:
case 1518:
case 3122:
case 3628:
case 1987:
case 2582:
case 1084:
case 2316:
case 383:
case 2085:
case 849:
case 2309:
case 4066:
case 1801:
case 1643:
case 2018:
case 1197:
case 982:
case 374:
case 2877:
case 3082:
case 3527:
case 433:
case 3670:
case 992:
case 1845:
case 4094:
case 2647:
case 1227:
case 390:
case 806:
case 1475:
case 2807:
case 646:
case 145:
case 3354:
case 564:
case 279:
case 3369:
case 3201:
case 1764:
case 3828:
case 548:
case 1673:
case 27:
case 2574:
case 1642:
case 2145:
case 3239:
case 3881:
case 1198:
case 2185:
case 2233:
case 1760:
case 1597:
case 2760:
case 1290:
case 3823:
case 132:
case 2611:
case 2820:
case 3820:
case 2670:
case 1030:
case 200:
case 2846:
case 3421:
case 1390:
case 645:
case 3221:
case 2909:
case 2905:
case 757:
case 867:
case 1749:
case 810:
case 2743:
case 1101:
case 2997:
case 3359:
case 3473:
case 1006:
case 2423:
case 2214:
case 3720:
case 1869:
case 307:
case 2449:
case 4085:
case 4089:
case 2718:
case 3086:
case 1324:
case 1592:
case 424:
case 1888:
case 283:
case 2593:
case 555:
case 2706:
case 3495:
case 3100:
case 1936:
case 1968:
case 1676:
case 3689:
case 1396:
case 2506:
case 1935:
case 917:
case 1914:
case 2355:
case 2618:
case 1551:
case 3782:
case 3743:
case 3224:
case 3830:
case 3953:
case 3783:
case 3259:
case 1019:
case 641:
case 566:
case 1848:
case 3112:
case 3345:
case 1571:
case 1041:
case 2656:
case 1839:
case 2721:
case 3120:
case 2563:
case 1221:
case 1520:
case 2429:
case 2468:
case 3392:
case 3762:
case 3676:
case 3213:
case 1483:
case 3016:
case 2074:
case 1108:
case 3970:
case 2040:
case 128:
case 2129:
case 2756:
case 3717:
case 1464:
case 1381:
case 2457:
case 3149:
case 2434:
case 814:
case 3314:
case 1023:
case 2589:
case 4086:
case 964:
case 2726:
case 1122:
case 3180:
case 2834:
case 3865:
case 1503:
case 1485:
case 2382:
case 3772:
case 49:
case 1825:
case 125:
case 3729:
case 1722:
case 1433:
case 2705:
case 3081:
case 2825:
case 829:
case 3622:
case 266:
case 3752:
case 3579:
case 1115:
case 3480:
case 2596:
case 750:
case 334:
case 2070:
case 2:
case 2045:
case 1148:
case 3390:
case 2882:
case 639:
case 1654:
case 1297:
case 417:
case 2897:
case 2797:
case 2483:
case 949:
case 2594:
case 3192:
case 285:
case 2258:
case 2343:
case 2924:
case 1312:
case 156:
case 2750:
case 2226:
case 1550:
case 1415:
case 3813:
case 3662:
case 684:
case 2257:
case 1394:
case 2478:
case 66:
case 1292:
case 3147:
case 318:
case 2427:
case 764:
case 1939:
case 1453:
case 2579:
case 2321:
case 3353:
case 499:
case 391:
case 2407:
case 3612:
case 723:
case 1697:
case 2324:
case 556:
case 2291:
case 1791:
case 3863:
case 897:
case 83:
case 3634:
case 1965:
case 241:
case 654:
case 1490:
case 3972:
case 2374:
case 2454:
case 1254:
case 1630:
case 1481:
case 3542:
case 777:
case 1371:
case 3926:
case 2603:
case 248:
case 3129:
case 3238:
case 3297:
case 1003:
case 3722:
case 520:
case 3268:
case 3377:
case 2455:
case 1387:
case 1465:
case 3185:
case 765:
case 464:
case 1076:
case 3452:
case 3916:
case 2453:
case 2307:
case 271:
case 1341:
case 360:
case 1844:
case 642:
case 1058:
case 2065:
case 3343:
case 3378:
case 2272:
case 554:
case 3451:
case 1188:
case 2633:
case 696:
case 1849:
case 2547:
case 2473:
case 3220:
case 65:
case 3069:
case 3146:
case 585:
case 1251:
case 432:
case 3514:
case 2517:
case 3486:
case 3418:
case 346:
case 954:
case 594:
case 2896:
case 1303:
case 869:
case 154:
case 164:
case 2943:
case 2863:
case 509:
case 461:
case 1457:
case 293:
case 459:
case 3817:
case 3776:
case 2122:
case 1543:
case 2954:
case 3:
case 2561:
case 3058:
case 1703:
case 649:
case 4062:
case 2509:
case 2501:
case 4074:
case 204:
case 1106:
case 178:
case 2106:
case 3603:
case 1799:
case 3208:
case 1398:
case 335:
case 112:
case 536:
case 482:
case 404:
case 1629:
case 3971:
case 1320:
case 3890:
case 1660:
case 3702:
case 3026:
case 2488:
case 1149:
case 2533:
case 2649:
case 1244:
case 1235:
case 2066:
case 3957:
case 3877:
case 2367:
case 1307:
case 3085:
case 1470:
case 2920:
case 2774:
case 1996:
case 753:
case 2948:
case 4038:
case 2976:
case 2002:
case 1514:
case 1651:
case 1737:
case 916:
case 2964:
case 2447:
case 1246:
case 2817:
case 2306:
case 643:
case 56:
case 2907:
case 2751:
case 238:
case 3911:
case 3172:
case 1301:
case 615:
case 503:
case 2452:
case 857:
case 656:
case 1719:
case 569:
case 1706:
case 3553:
case 4088:
case 1977:
case 1042:
case 3757:
case 3546:
case 79:
case 2556:
case 1624:
case 2241:
case 2416:
case 2116:
case 1688:
case 3317:
case 988:
case 4:
case 2363:
case 4013:
case 2961:
case 2440:
case 2570:
case 1782:
case 2170:
case 1295:
case 321:
case 1504:
case 572:
case 602:
case 1906:
case 349:
case 910:
case 405:
case 2067:
case 57:
case 2672:
case 69:
case 2778:
case 1109:
case 601:
case 3130:
case 1793:
case 855:
case 199:
case 2875:
case 1843:
case 3094:
case 518:
case 3496:
case 1854:
case 3558:
case 3141:
case 3684:
case 1447:
case 1902:
case 4073:
case 1757:
case 818:
case 3798:
case 2412:
case 4095:
case 2758:
case 3051:
case 763:
case 938:
case 4015:
case 2215:
case 3695:
case 3061:
case 714:
case 1131:
case 1186:
case 3195:
case 1645:
case 2859:
case 2549:
case 2349:
case 968:
case 2283:
case 3665:
case 1444:
case 4009:
case 3295:
case 224:
case 13:
case 1667:
case 4049:
case 2107:
case 2703:
case 3656:
case 2388:
case 1358:
case 1956:
case 3552:
case 2958:
case 966:
case 1124:
case 3719:
case 3526:
case 2690:
case 3169:
case 3350:
case 75:
case 2704:
case 1274:
case 431:
case 969:
case 3269:
case 1858:
case 1528:
case 1438:
case 1137:
case 1165:
case 1911:
case 1883:
case 3018:
case 107:
case 35:
case 1817:
case 2034:
case 172:
case 2451:
case 2472:
case 3347:
case 246:
case 3431:
case 1807:
case 3151:
case 1649:
case 3240:
case 792:
case 1761:
case 3524:
case 2538:
case 3531:
case 1886:
case 1100:
case 3936:
case 470:
case 3867:
case 3582:
case 3831:
case 3071:
case 2179:
case 511:
case 3342:
case 1315:
case 2165:
case 1442:
case 2052:
case 2653:
case 2248:
case 640:
case 3984:
case 1568:
case 2098:
case 2993:
case 3163:
case 4079:
case 3445:
case 1306:
case 808:
case 1280:
case 3116:
case 975:
case 3219:
case 1682:
case 367:
case 2729:
case 778:
case 3878:
case 284:
case 2620:
case 121:
case 1096:
case 3303:
case 3344:
case 1981:
case 2945:
case 2950:
case 4063:
case 3458:
case 1156:
case 2576:
case 4028:
case 1004:
case 3232:
case 3281:
case 3843:
case 1868:
case 2314:
case 198:
case 3170:
case 2000:
case 3604:
case 4060:
case 2235:
case 118:
case 3443:
case 3265:
case 2831:
case 970:
case 2752:
case 3176:
case 3651:
case 412:
case 1885:
case 3606:
case 4083:
case 316:
case 2599:
case 2645:
case 1781:
case 1963:
case 3436:
case 2818:
case 2998:
case 1060:
case 2328:
case 991:
case 447:
case 2232:
case 313:
case 4082:
case 3724:
case 3370:
case 2365:
case 3520:
case 790:
case 1072:
case 2886:
case 267:
case 2350:
case 2601:
case 1428:
case 103:
case 3293:
case 1612:
case 1224:
case 1016:
case 1078:
case 3966:
case 3023:
case 2555:
case 3993:
case 694:
case 2931:
case 3635:
case 3590:
case 3599:
case 2776:
case 795:
case 426:
case 2548:
case 3340:
case 799:
case 634:
case 2205:
case 1698:
case 250:
case 368:
case 1800:
case 2916:
case 1013:
case 1771:
case 1132:
case 2569:
case 3087:
case 4047:
case 80:
case 183:
case 517:
case 2062:
case 2015:
case 597:
case 939:
case 1051:
case 317:
case 2848:
case 2025:
case 647:
case 1203:
case 47:
case 3349:
case 2911:
case 2051:
case 2378:
case 400:
case 359:
case 2167:
case 3242:
case 1581:
case 3429:
case 2218:
case 167:
case 1602:
case 4048:
case 2947:
case 3633:
case 2308:
case 2191:
case 225:
case 2883:
case 3706:
case 3113:
case 545:
case 1375:
case 1255:
case 3664:
case 2627:
case 3511:
case 3158:
case 1988:
case 3941:
case 1971:
case 3626:
case 2016:
case 2270:
case 670:
case 839:
case 2798:
case 1123:
case 3166:
case 1386:
case 557:
case 463:
case 421:
case 2904:
case 731:
case 2397:
case 534:
case 222:
case 2148:
case 2867:
case 2144:
case 2783:
case 2417:
case 3468:
case 3818:
case 754:
case 2977:
case 2211:
case 1663:
case 1258:
case 239:
case 1796:
case 2622:
case 1625:
case 3109:
case 3592:
case 1577:
case 3976:
case 1253:
case 2091:
case 3039:
case 2069:
case 2789:
case 1343:
case 2009:
case 3504:
case 3696:
case 1423:
case 2049:
case 255:
case 598:
case 2021:
case 3207:
case 904:
case 3261:
case 3703:
case 3108:
case 2120:
case 662:
case 2301:
case 1915:
case 1978:
case 1566:
case 746:
case 2651:
case 3990:
case 1002:
case 943:
case 375:
case 3449:
case 460:
case 221:
case 2613:
case 717:
case 2769:
case 1875:
case 740:
case 3161:
case 139:
case 3847:
case 2210:
case 4010:
case 1533:
case 331:
case 1499:
case 1819:
case 1794:
case 3214:
case 3225:
case 2413:
case 3845:
case 2836:
case 1431:
case 1323:
case 1521:
case 3562:
case 1427:
case 2553:
case 3102:
case 2360:
case 2469:
case 3764:
case 1821:
case 1700:
case 1523:
case 34:
case 3298:
case 1535:
case 2826:
case 427:
case 1225:
case 711:
case 1834:
case 3910:
case 3693:
case 3048:
case 3530:
case 2654:
case 940:
case 3244:
case 136:
case 3036:
case 756:
case 1744:
case 1609:
case 3126:
case 959:
case 1964:
case 889:
case 2989:
case 1705:
case 3575:
case 2792:
case 2466:
case 1247:
case 1143:
case 762:
case 2898:
case 663:
case 2918:
case 1635:
case 2560:
case 4084:
case 3254:
case 1372:
case 3727:
case 914:
case 1709:
case 1880:
case 894:
case 3106:
case 1508:
case 3987:
case 1884:
case 1379:
case 3858:
case 2392:
case 31:
case 1955:
case 2895:
case 2619:
case 591:
case 929:
case 3043:
case 1563:
case 2369:
case 3067:
case 3469:
case 2171:
case 2507:
case 3022:
case 4014:
case 1982:
case 1564:
case 1009:
case 797:
case 1862:
case 2250:
case 1476:
case 1448:
case 1907:
case 809:
case 541:
case 727:
case 1636:
case 920:
case 2583:
case 713:
case 1378:
case 439:
case 947:
case 3734:
case 2617:
case 3341:
case 2050:
case 2625:
case 2935:
case 3386:
case 480:
case 436:
case 836:
case 217:
case 1881:
case 3258:
case 4043:
case 1032:
case 596:
case 3678:
case 3965:
case 2498:
case 348:
case 2377:
case 2637:
case 3330:
case 76:
case 2786:
case 2384:
case 3187:
case 3223:
case 3557:
case 1248:
case 3840:
case 2424:
case 1702:
case 2311:
case 2919:
case 395:
case 1530:
case 29:
case 3274:
case 890:
case 1028:
case 3790:
case 467:
case 3935:
case 1269:
case 445:
case 3666:
case 370:
case 2775:
case 1721:
case 1219:
case 3437:
case 688:
case 1720:
case 2544:
case 420:
case 3773:
case 2901:
case 1572:
case 2260:
case 2280:
case 1824:
case 1480:
case 709:
case 1388:
case 2979:
case 4017:
case 1281:
case 2566:
case 1919:
case 1901:
case 1327:
case 1561:
case 389:
case 537:
case 3405:
case 2190:
case 1031:
case 2352:
case 323:
case 3576:
case 788:
case 3735:
case 3414:
case 3781:
case 922:
case 3460:
case 2230:
case 362:
case 1223:
case 833:
case 2112:
case 2885:
case 1110:
case 3854:
case 2540:
case 45:
case 1657:
case 428:
case 3659:
case 3907:
case 1728:
case 3870:
case 474:
case 2675:
case 3310:
case 1894:
case 540:
case 2090:
case 3257:
case 1356:
case 1196:
case 2188:
case 109:
case 3307:
case 1798:
case 3821:
case 2183:
case 2093:
case 3642:
case 1182:
case 3570:
case 1912:
case 3924:
case 3686:
case 3394:
case 1082:
case 1600:
case 3136:
case 2229:
case 2610:
case 3289:
case 1065:
case 2816:
case 1747:
case 97:
case 2808:
case 2510:
case 578:
case 850:
case 2464:
case 381:
case 2300:
case 3617:
case 507:
case 1344:
case 483:
case 1601:
case 719:
case 616:
case 2057:
case 2157:
case 1151:
case 2420:
case 1495:
case 3636:
case 3573:
case 2642:
case 614:
case 1284:
case 207:
case 1680:
case 3775:
case 2844:
case 3144:
case 230:
case 1376:
case 1957:
case 96:
case 1293:
case 2550:
case 2835:
case 678:
case 1070:
case 1125:
case 3593:
case 2969:
case 423:
case 2437:
case 2791:
case 2899:
case 881:
case 3476:
case 1342:
case 180:
case 430:
case 3655:
case 2202:
case 3383:
case 2482:
case 1207:
case 2304:
case 1263:
case 415:
case 46:
case 1208:
case 785:
case 1040:
case 1025:
case 3397:
case 838:
case 72:
case 3009:
case 612:
case 1841:
case 1730:
case 3654:
case 1168:
case 609:
case 945:
case 3253:
case 1772:
case 539:
case 884:
case 1863:
case 3439:
case 2724:
case 1153:
case 3035:
case 3700:
case 340:
case 935:
case 3980:
case 840:
case 2699:
case 3355:
case 1816:
case 1273:
case 3215:
case 1226:
case 980:
case 68:
case 300:
case 2708:
case 2470:
case 1209:
case 3685:
case 802:
case 3047:
case 1114:
case 926:
case 140:
case 1080:
case 2521:
case 3983:
case 3510:
case 2121:
case 3124:
case 1856:
case 3534:
case 2386:
case 2858:
case 3001:
case 2572:
case 807:
case 3404:
case 825:
case 3079:
case 2985:
case 2299:
case 357:
case 1477:
case 2685:
case 1449:
case 4018:
case 2927:
case 4069:
case 3942:
case 2779:
case 2880:
case 2371:
case 1406:
case 3688:
case 3138:
case 1345:
case 442:
case 9:
case 736:
case 1296:
case 993:
case 1668:
case 752:
case 364:
case 252:
case 2771:
case 22:
case 3467:
case 3969:
case 1496:
case 1335:
case 2519:
case 3311:
case 1931:
case 1892:
case 1057:
case 994:
case 2240:
case 2227:
case 256:
case 2732:
case 477:
case 130:
case 3897:
case 3609:
case 1979:
case 2598:
case 1471:
case 2060:
case 2722:
case 1930:
case 3040:
case 397:
case 2448:
case 1211:
case 322:
case 1537:
case 2037:
case 695:
case 166:
case 996:
case 2247:
case 3464:
case 2678:
case 3066:
case 2441:
case 1017:
case 2136:
case 1587:
case 2162:
case 3045:
case 3806:
case 3457:
case 1604:
case 209:
case 774:
case 332:
case 292:
case 3525:
case 2730:
case 1710:
case 1455:
case 2982:
case 1213:
case 2701:
case 2864:
case 2344:
case 735:
case 2712:
case 3373:
case 3034:
case 841:
case 2725:
case 573:
case 1878:
case 1171:
case 2869:
case 2252:
case 3076:
case 2983:
case 665:
case 2884:
case 565:
case 1446:
case 1751:
case 3300:
case 3266:
case 3074:
case 582:
case 3237:
case 2870:
case 1075:
case 3475:
case 739:
case 2401:
case 213:
case 506:
case 2354:
case 2102:
case 2512:
case 3296:
case 2436:
case 4041:
case 2871:
case 201:
case 2490:
case 547:
case 2383:
case 3842:
case 1687:
case 638:
case 14:
case 106:
case 3419:
case 1231:
case 1460:
case 1491:
case 3977:
case 4052:
case 2089:
case 146:
case 632:
case 2078:
case 3914:
case 1079:
case 169:
case 215:
case 2180:
case 2178:
case 2022:
case 872:
case 689:
case 3121:
case 3323:
case 1104:
case 543:
case 330:
case 2719:
case 3210:
case 1333:
case 3322:
case 3938:
case 3168:
case 2815:
case 789:
case 1634:
case 3235:
case 2159:
case 2849:
case 4031:
case 373:
case 3152:
case 1353:
case 197:
case 105:
case 3013:
case 3304:
case 1443:
case 972:
case 2648:
case 2385:
case 2465:
case 1289:
case 2745:
case 679:
case 2119:
case 1502:
case 1068:
case 2793:
case 2166:
case 1746:
case 2410:
case 2537:
case 1795:
case 2890:
case 3188:
case 2785:
case 435:
case 1548:
case 2602:
case 1983:
case 2391:
case 270:
case 351:
case 3375:
case 2201:
case 219:
case 2399:
case 3282:
case 1111:
case 3901:
case 2366:
case 1026:
case 3139:
case 3736:
case 3198:
case 3549:
case 1309:
case 1716:
case 1116:
case 3250:
case 1672:
case 1972:
case 3789:
case 2319:
case 1904:
case 437:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1725829201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,];
var gg_b = "1725829201/";

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
