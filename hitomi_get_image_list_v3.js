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
case 2590:
case 385:
case 1312:
case 1864:
case 1948:
case 1608:
case 3263:
case 165:
case 2504:
case 1692:
case 1149:
case 3000:
case 3094:
case 3682:
case 446:
case 3927:
case 2462:
case 2134:
case 3676:
case 1029:
case 1865:
case 1751:
case 995:
case 846:
case 1457:
case 3665:
case 692:
case 1709:
case 2057:
case 1085:
case 2135:
case 632:
case 2429:
case 580:
case 1185:
case 1928:
case 2035:
case 4077:
case 2279:
case 3195:
case 3714:
case 1129:
case 951:
case 2843:
case 3947:
case 1184:
case 2570:
case 3194:
case 3066:
case 1552:
case 2034:
case 694:
case 660:
case 1896:
case 159:
case 1672:
case 3530:
case 1686:
case 3458:
case 3886:
case 4088:
case 2650:
case 3232:
case 738:
case 3473:
case 3305:
case 679:
case 2286:
case 798:
case 844:
case 3905:
case 2272:
case 781:
case 3706:
case 963:
case 2442:
case 578:
case 3879:
case 3304:
case 2527:
case 1380:
case 444:
case 133:
case 1169:
case 29:
case 1018:
case 3390:
case 2356:
case 611:
case 1980:
case 2755:
case 2839:
case 3797:
case 1968:
case 1844:
case 4014:
case 281:
case 2431:
case 3899:
case 1889:
case 2737:
case 1699:
case 3370:
case 4040:
case 2181:
case 3046:
case 3625:
case 3777:
case 1825:
case 3970:
case 2863:
case 3493:
case 4015:
case 2547:
case 3967:
case 1503:
case 225:
case 3788:
case 3624:
case 3367:
case 79:
case 1824:
case 1993:
case 1214:
case 3655:
case 1467:
case 2744:
case 3983:
case 2535:
case 1739:
case 2917:
case 3813:
case 2697:
case 936:
case 546:
case 2067:
case 2105:
case 3575:
case 2745:
case 117:
case 1215:
case 31:
case 166:
case 724:
case 1854:
case 3566:
case 249:
case 386:
case 2190:
case 3156:
case 1971:
case 109:
case 445:
case 2452:
case 308:
case 3574:
case 977:
case 222:
case 2104:
case 2090:
case 119:
case 2724:
case 1562:
case 318:
case 3381:
case 2802:
case 1220:
case 480:
case 1611:
case 1584:
case 2170:
case 107:
case 2660:
case 3594:
case 4050:
case 1490:
case 3811:
case 2725:
case 583:
case 911:
case 2926:
case 722:
case 2005:
case 2677:
case 2789:
case 1405:
case 1373:
case 2557:
case 3251:
case 1585:
case 171:
case 2326:
case 3209:
case 880:
case 2016:
case 651:
case 130:
case 1101:
case 1958:
case 2809:
case 3546:
case 2374:
case 1531:
case 164:
case 2765:
case 2975:
case 3202:
case 1723:
case 3335:
case 2047:
case 2776:
case 544:
case 2782:
case 1260:
case 2583:
case 3935:
case 2764:
case 62:
case 1288:
case 960:
case 1447:
case 3736:
case 994:
case 2238:
case 2615:
case 226:
case 2796:
case 3750:
case 3957:
case 628:
case 2147:
case 3526:
case 3278:
case 1103:
case 2401:
case 3448:
case 1743:
case 2027:
case 2614:
case 2213:
case 2994:
case 635:
case 932:
case 1059:
case 87:
case 2394:
case 3412:
case 1542:
case 529:
case 2300:
case 1001:
case 3252:
case 342:
case 3015:
case 3766:
case 3120:
case 329:
case 3965:
case 2219:
case 1230:
case 1612:
case 1992:
case 1109:
case 1827:
case 3040:
case 2336:
case 3627:
case 3976:
case 3812:
case 135:
case 1392:
case 2510:
case 582:
case 1539:
case 1561:
case 3382:
case 3848:
case 723:
case 2936:
case 3964:
case 2544:
case 2451:
case 2589:
case 2409:
case 1785:
case 3140:
case 1051:
case 2280:
case 1847:
case 1563:
case 3647:
case 1256:
case 3907:
case 1784:
case 3700:
case 2268:
case 584:
case 1628:
case 3307:
case 3828:
case 3115:
case 12:
case 1153:
case 3944:
case 1890:
case 3604:
case 2564:
case 383:
case 3536:
case 3868:
case 2498:
case 3411:
case 3717:
case 1002:
case 1668:
case 1178:
case 458:
case 2402:
case 2228:
case 3344:
case 2576:
case 440:
case 3060:
case 26:
case 3310:
case 1098:
case 3077:
case 1731:
case 3945:
case 1805:
case 518:
case 1437:
case 3746:
case 3197:
case 4075:
case 2037:
case 1187:
case 543:
case 671:
case 1742:
case 3924:
case 421:
case 787:
case 2212:
case 51:
case 2137:
case 586:
case 1521:
case 2055:
case 85:
case 2487:
case 3177:
case 2248:
case 3324:
case 2507:
case 4095:
case 3413:
case 1718:
case 885:
case 1543:
case 3188:
case 2478:
case 2054:
case 1532:
case 3726:
case 2852:
case 1399:
case 3670:
case 346:
case 821:
case 2596:
case 3438:
case 1454:
case 3819:
case 268:
case 609:
case 3325:
case 1619:
case 4000:
case 1425:
case 101:
case 3354:
case 1338:
case 1161:
case 2306:
case 2089:
case 2144:
case 1295:
case 1509:
case 1938:
case 241:
case 1313:
case 1063:
case 1424:
case 37:
case 2397:
case 3262:
case 966:
case 1913:
case 917:
case 3284:
case 2822:
case 482:
case 2463:
case 1445:
case 378:
case 2258:
case 179:
case 2833:
case 741:
case 2377:
case 220:
case 1553:
case 1752:
case 919:
case 2770:
case 2045:
case 2626:
case 3540:
case 3681:
case 2988:
case 2439:
case 2818:
case 633:
case 971:
case 111:
case 1039:
case 3479:
case 2842:
case 484:
case 2044:
case 843:
case 1759:
case 1021:
case 1587:
case 2555:
case 964:
case 990:
case 80:
case 2421:
case 1043:
case 930:
case 540:
case 3634:
case 418:
case 2176:
case 3472:
case 380:
case 3506:
case 1032:
case 2554:
case 1123:
case 1496:
case 1834:
case 3050:
case 2096:
case 2432:
case 2674:
case 134:
case 486:
case 2064:
case 3036:
case 665:
case 521:
case 962:
case 41:
case 1482:
case 3408:
case 2884:
case 2076:
case 2694:
case 3588:
case 2914:
case 2293:
case 1464:
case 1132:
case 1217:
case 4030:
case 1598:
case 3577:
case 2315:
case 2829:
case 2107:
case 3269:
case 2915:
case 1857:
case 886:
case 55:
case 2537:
case 2716:
case 1121:
case 3657:
case 81:
case 2353:
case 1577:
case 3143:
case 2629:
case 392:
case 332:
case 3246:
case 1657:
case 3465:
case 205:
case 1150:
case 982:
case 1036:
case 1:
case 2662:
case 2008:
case 2186:
case 3482:
case 2172:
case 466:
case 1222:
case 65:
case 3703:
case 2800:
case 1560:
case 3217:
case 145:
case 3132:
case 3464:
case 3023:
case 2436:
case 2511:
case 3598:
case 1233:
case 2951:
case 1634:
case 1506:
case 2866:
case 360:
case 3123:
case 419:
case 2538:
case 2649:
case 394:
case 2192:
case 1050:
case 334:
case 407:
case 2874:
case 2072:
case 658:
case 2748:
case 984:
case 3701:
case 3759:
case 3407:
case 2281:
case 559:
case 471:
case 1242:
case 705:
case 2712:
case 3043:
case 3911:
case 3691:
case 1540:
case 2302:
case 3444:
case 3410:
case 1514:
case 2199:
case 2398:
case 311:
case 490:
case 3311:
case 3061:
case 178:
case 3266:
case 90:
case 2633:
case 2234:
case 533:
case 1730:
case 1249:
case 2826:
case 3752:
case 3163:
case 918:
case 1873:
case 908:
case 17:
case 462:
case 2780:
case 91:
case 2622:
case 1284:
case 273:
case 3200:
case 1893:
case 2768:
case 3671:
case 301:
case 3425:
case 752:
case 3161:
case 3139:
case 1354:
case 1871:
case 1229:
case 4001:
case 2179:
case 3938:
case 396:
case 2257:
case 1499:
case 1285:
case 3870:
case 1389:
case 2773:
case 1006:
case 1188:
case 1925:
case 465:
case 206:
case 2038:
case 686:
case 4062:
case 231:
case 2111:
case 3198:
case 3454:
case 1819:
case 1550:
case 3733:
case 146:
case 1325:
case 2830:
case 3102:
case 4084:
case 288:
case 3078:
case 2406:
case 269:
case 1097:
case 517:
case 78:
case 566:
case 3087:
case 857:
case 767:
case 4029:
case 1324:
case 1177:
case 2791:
case 1413:
case 865:
case 1667:
case 2963:
case 1259:
case 2497:
case 3769:
case 519:
case 3731:
case 1945:
case 2216:
case 788:
case 1746:
case 706:
case 3890:
case 1203:
case 1944:
case 255:
case 3722:
case 2793:
case 3668:
case 2508:
case 3002:
case 1910:
case 2488:
case 3804:
case 618:
case 4049:
case 1690:
case 216:
case 2361:
case 267:
case 3979:
case 3098:
case 1310:
case 1794:
case 4033:
case 893:
case 1020:
case 3563:
case 2603:
case 3847:
case 940:
case 1647:
case 1700:
case 833:
case 2921:
case 590:
case 3153:
case 32:
case 2420:
case 3986:
case 2332:
case 3785:
case 1996:
case 1616:
case 3372:
case 4042:
case 1140:
case 3386:
case 1114:
case 3729:
case 3612:
case 3308:
case 214:
case 2341:
case 1775:
case 3109:
case 3827:
case 1014:
case 1627:
case 1364:
case 1976:
case 3151:
case 1812:
case 2414:
case 2267:
case 712:
case 4031:
case 3561:
case 3539:
case 3648:
case 3908:
case 1848:
case 921:
case 395:
case 1964:
case 704:
case 95:
case 2270:
case 3053:
case 142:
case 682:
case 985:
case 2415:
case 129:
case 1965:
case 3749:
case 270:
case 3230:
case 1287:
case 1448:
case 2840:
case 2255:
case 2362:
case 3297:
case 2814:
case 401:
case 2591:
case 3721:
case 877:
case 1412:
case 2048:
case 3427:
case 2772:
case 1750:
case 642:
case 1957:
case 4063:
case 2815:
case 182:
case 1526:
case 362:
case 2929:
case 2385:
case 2573:
case 1202:
case 479:
case 551:
case 1335:
case 811:
case 1517:
case 3741:
case 980:
case 1298:
case 3447:
case 627:
case 2593:
case 3288:
case 3358:
case 2148:
case 3101:
case 330:
case 3277:
case 2349:
case 2651:
case 364:
case 2949:
case 2237:
case 2112:
case 4021:
case 834:
case 894:
case 3373:
case 3837:
case 2933:
case 1251:
case 2799:
case 1595:
case 1209:
case 460:
case 4032:
case 319:
case 3391:
case 683:
case 2068:
case 2602:
case 3562:
case 2942:
case 2080:
case 1381:
case 2918:
case 307:
case 3991:
case 434:
case 2698:
case 1500:
case 2888:
case 2860:
case 3490:
case 2456:
case 1594:
case 4041:
case 317:
case 248:
case 366:
case 250:
case 2969:
case 11:
case 2931:
case 1253:
case 3638:
case 1654:
case 1566:
case 3854:
case 1838:
case 2430:
case 3052:
case 892:
case 309:
case 1156:
case 3971:
case 2369:
case 2180:
case 3467:
case 3613:
case 3993:
case 1983:
case 1813:
case 3739:
case 2322:
case 1383:
case 501:
case 1760:
case 2711:
case 895:
case 946:
case 1967:
case 4053:
case 2417:
case 3503:
case 3236:
case 2173:
case 1624:
case 3702:
case 1367:
case 2276:
case 3133:
case 2093:
case 435:
case 577:
case 3889:
case 3142:
case 828:
case 3919:
case 2446:
case 1625:
case 3825:
case 3031:
case 239:
case 1304:
case 82:
case 3368:
case 333:
case 3679:
case 3810:
case 3787:
case 1243:
case 1491:
case 4051:
case 2713:
case 2639:
case 3042:
case 1990:
case 237:
case 3481:
case 678:
case 3033:
case 739:
case 983:
case 2738:
case 761:
case 3250:
case 463:
case 3184:
case 2474:
case 2632:
case 927:
case 3552:
case 359:
case 2850:
case 3896:
case 3434:
case 3753:
case 1074:
case 158:
case 1872:
case 140:
case 1696:
case 3928:
case 594:
case 1347:
case 1195:
case 1714:
case 3807:
case 3129:
case 1947:
case 1607:
case 534:
case 1239:
case 2289:
case 4087:
case 3751:
case 1665:
case 3709:
case 2225:
case 772:
case 1095:
case 3864:
case 3312:
case 6:
case 3608:
case 3062:
case 2641:
case 2836:
case 1174:
case 1808:
case 2580:
case 929:
case 1664:
case 1263:
case 357:
case 3912:
case 3084:
case 2224:
case 4078:
case 3348:
case 3149:
case 2623:
case 942:
case 532:
case 1682:
case 2158:
case 1892:
case 2778:
case 3426:
case 620:
case 2122:
case 1272:
case 376:
case 3738:
case 1754:
case 3073:
case 3296:
case 2250:
case 2845:
case 1527:
case 1442:
case 2679:
case 3512:
case 2169:
case 552:
case 1839:
case 1755:
case 2980:
case 1861:
case 2810:
case 3207:
case 404:
case 337:
case 2968:
case 3661:
case 1516:
case 1469:
case 2919:
case 1737:
case 399:
case 3265:
case 3071:
case 802:
case 1930:
case 138:
case 1181:
case 3952:
case 2118:
case 573:
case 3191:
case 2031:
case 2069:
case 1547:
case 1863:
case 989:
case 2798:
case 1422:
case 968:
case 793:
case 2236:
case 3173:
case 125:
case 2702:
case 3282:
case 814:
case 2824:
case 2022:
case 3528:
case 3276:
case 2133:
case 353:
case 3901:
case 3836:
case 2608:
case 3641:
case 2312:
case 4038:
case 3494:
case 2864:
case 406:
case 3959:
case 3400:
case 1504:
case 1636:
case 1484:
case 1841:
case 2149:
case 469:
case 310:
case 2348:
case 488:
case 2692:
case 2084:
case 257:
case 3158:
case 1462:
case 3359:
case 2029:
case 2865:
case 759:
case 2751:
case 505:
case 1485:
case 2709:
case 2457:
case 2085:
case 831:
case 806:
case 1135:
case 757:
case 3475:
case 867:
case 3621:
case 1157:
case 88:
case 1279:
case 1035:
case 1821:
case 3643:
case 3244:
case 2328:
case 1567:
case 855:
case 1843:
case 765:
case 2049:
case 3474:
case 1570:
case 3058:
case 1034:
case 1832:
case 2753:
case 2686:
case 2434:
case 467:
case 2162:
case 259:
case 3850:
case 3519:
case 48:
case 923:
case 1366:
case 1016:
case 2358:
case 2159:
case 762:
case 3571:
case 2277:
case 3349:
case 230:
case 1374:
case 3651:
case 3237:
case 290:
case 3792:
case 1975:
case 1776:
case 504:
case 1583:
case 2741:
case 2288:
case 2447:
case 3593:
case 3028:
case 2522:
case 1615:
case 764:
case 1853:
case 1796:
case 2533:
case 473:
case 2732:
case 3573:
case 2103:
case 3929:
case 1614:
case 3255:
case 1581:
case 1994:
case 3012:
case 2518:
case 3984:
case 502:
case 1394:
case 2721:
case 1116:
case 2059:
case 3384:
case 2427:
case 3048:
case 3922:
case 1744:
case 2993:
case 2467:
case 2855:
case 2761:
case 2739:
case 1697:
case 531:
case 2240:
case 506:
case 1535:
case 1887:
case 1317:
case 1067:
case 805:
case 2215:
case 2549:
case 266:
case 3969:
case 350:
case 3806:
case 1745:
case 2371:
case 217:
case 348:
case 4008:
case 1534:
case 771:
case 3430:
case 2854:
case 405:
case 1606:
case 4092:
case 3369:
case 1452:
case 1190:
case 3678:
case 122:
case 1104:
case 1878:
case 1346:
case 3942:
case 3068:
case 3602:
case 2562:
case 2391:
case 3318:
case 3119:
case 1004:
case 147:
case 4072:
case 1660:
case 3698:
case 4086:
case 1170:
case 207:
case 2152:
case 3456:
case 3860:
case 2490:
case 2529:
case 1725:
case 2973:
case 555:
case 815:
case 1005:
case 2585:
case 58:
case 3933:
case 2405:
case 766:
case 1557:
case 124:
case 516:
case 271:
case 472:
case 4058:
case 2680:
case 3793:
case 1498:
case 3460:
case 2722:
case 355:
case 2379:
case 647:
case 3247:
case 3939:
case 263:
case 2541:
case 3508:
case 2002:
case 1402:
case 1576:
case 187:
case 1228:
case 3592:
case 2098:
case 2979:
case 367:
case 1154:
case 3138:
case 3339:
case 16:
case 316:
case 1565:
case 503:
case 2769:
case 93:
case 2437:
case 54:
case 872:
case 3771:
case 3113:
case 624:
case 2187:
case 1212:
case 474:
case 1137:
case 3363:
case 2521:
case 513:
case 2718:
case 981:
case 1248:
case 853:
case 763:
case 1781:
case 2543:
case 3497:
case 3963:
case 3773:
case 3652:
case 2870:
case 1852:
case 453:
case 649:
case 306:
case 874:
case 168:
case 189:
case 2733:
case 2454:
case 3406:
case 369:
case 2999:
case 3572:
case 391:
case 2619:
case 3586:
case 388:
case 2102:
case 622:
case 626:
case 4093:
case 3415:
case 899:
case 2749:
case 1219:
case 2109:
case 2308:
case 3341:
case 4071:
case 2612:
case 2992:
case 2151:
case 2908:
case 3323:
case 2539:
case 1510:
case 3267:
case 2392:
case 1859:
case 3440:
case 295:
case 1801:
case 3332:
case 728:
case 251:
case 1950:
case 1757:
case 1589:
case 2009:
case 2386:
case 3932:
case 304:
case 2729:
case 2563:
case 3943:
case 3321:
case 1268:
case 2256:
case 1803:
case 795:
case 2784:
case 4073:
case 3343:
case 2628:
case 476:
case 1291:
case 3748:
case 2701:
case 1443:
case 3281:
case 1555:
case 2407:
case 84:
case 3712:
case 1165:
case 1421:
case 803:
case 3875:
case 1182:
case 44:
case 1849:
case 4080:
case 1176:
case 3951:
case 3192:
case 2123:
case 2032:
case 3450:
case 3909:
case 260:
case 315:
case 1164:
case 792:
case 3072:
case 3086:
case 3108:
case 305:
case 1064:
case 3172:
case 2482:
case 3662:
case 448:
case 1340:
case 1082:
case 1694:
case 926:
case 1293:
case 3800:
case 2703:
case 3511:
case 3684:
case 413:
case 1747:
case 3283:
case 4019:
case 1600:
case 2217:
case 1829:
case 1065:
case 1271:
case 3353:
case 813:
case 2143:
case 292:
case 3629:
case 1537:
case 3953:
case 1695:
case 2857:
case 760:
case 794:
case 1716:
case 848:
case 2338:
case 4012:
case 1110:
case 201:
case 2425:
case 3978:
case 2671:
case 698:
case 1144:
case 3631:
case 2509:
case 3669:
case 296:
case 354:
case 2938:
case 2489:
case 3378:
case 4048:
case 779:
case 1831:
case 1869:
case 1025:
case 1646:
case 141:
case 3257:
case 2424:
case 2063:
case 3387:
case 711:
case 599:
case 625:
case 1397:
case 561:
case 922:
case 1704:
case 3622:
case 2913:
case 3780:
case 3817:
case 949:
case 2200:
case 1822:
case 1790:
case 1258:
case 3633:
case 2445:
case 1377:
case 2553:
case 2163:
case 701:
case 4028:
case 2274:
case 1045:
case 2881:
case 1960:
case 2444:
case 2691:
case 3079:
case 3618:
case 875:
case 69:
case 1439:
case 1818:
case 1125:
case 3642:
case 2039:
case 2061:
case 1010:
case 211:
case 3199:
case 576:
case 1388:
case 1842:
case 2540:
case 3960:
case 1998:
case 3767:
case 1079:
case 3818:
case 3125:
case 4016:
case 2681:
case 1902:
case 1199:
case 3010:
case 3044:
case 637:
case 77:
case 3842:
case 3388:
case 1633:
case 278:
case 320:
case 2730:
case 2515:
case 4047:
case 3377:
case 3833:
case 2937:
case 1719:
case 152:
case 1826:
case 676:
case 3977:
case 94:
case 2337:
case 2520:
case 913:
case 581:
case 2262:
case 3397:
case 3145:
case 1987:
case 948:
case 1817:
case 3617:
case 3024:
case 3790:
case 2756:
case 2683:
case 3822:
case 2284:
case 2229:
case 4027:
case 3089:
case 661:
case 1846:
case 1669:
case 778:
case 1378:
case 1179:
case 3705:
case 826:
case 1257:
case 341:
case 3906:
case 3271:
case 3065:
case 3107:
case 1353:
case 2577:
case 674:
case 3537:
case 3915:
case 2269:
case 4067:
case 1953:
case 1895:
case 2492:
case 2036:
case 2:
case 3314:
case 449:
case 105:
case 3340:
case 1662:
case 3914:
case 422:
case 3082:
case 2588:
case 3076:
case 610:
case 3884:
case 3747:
case 1436:
case 1511:
case 2560:
case 1894:
case 4004:
case 3849:
case 3182:
case 2472:
case 2486:
case 447:
case 2634:
case 2858:
case 1192:
case 975:
case 156:
case 1909:
case 1866:
case 672:
case 4090:
case 3674:
case 3273:
case 3164:
case 3096:
case 115:
case 2050:
case 1874:
case 1309:
case 2218:
case 4005:
case 3443:
case 1748:
case 745:
case 1281:
case 3165:
case 424:
case 3007:
case 3675:
case 7:
case 2242:
case 847:
case 1875:
case 3727:
case 112:
case 1943:
case 83:
case 323:
case 1290:
case 1921:
case 3524:
case 675:
case 1420:
case 2828:
case 972:
case 2795:
case 1332:
case 1205:
case 1599:
case 3409:
case 3950:
case 244:
case 2616:
case 1932:
case 2396:
case 3350:
case 114:
case 1341:
case 1579:
case 498:
case 2364:
case 2982:
case 481:
case 2627:
case 2014:
case 1601:
case 3859:
case 1414:
case 825:
case 3510:
case 2376:
case 3936:
case 974:
case 3801:
case 2382:
case 2252:
case 910:
case 425:
case 242:
case 2015:
case 1758:
case 3734:
case 4083:
case 898:
case 170:
case 3219:
case 3545:
case 881:
case 2006:
case 2389:
case 2188:
case 3478:
case 2925:
case 2670:
case 131:
case 3852:
case 2160:
case 3054:
case 2325:
case 2989:
case 2819:
case 389:
case 3596:
case 1572:
case 169:
case 1013:
case 1363:
case 1791:
case 3507:
case 2667:
case 783:
case 3781:
case 2259:
case 1963:
case 1497:
case 999:
case 746:
case 2605:
case 2945:
case 2077:
case 2746:
case 937:
case 1216:
case 2345:
case 1771:
case 1113:
case 1477:
case 997:
case 976:
case 2411:
case 2536:
case 3564:
case 2604:
case 603:
case 155:
case 1856:
case 1488:
case 1247:
case 2690:
case 1939:
case 2717:
case 64:
case 18:
case 2088:
case 387:
case 3576:
case 3402:
case 167:
case 1592:
case 116:
case 2060:
case 1333:
case 708:
case 3677:
case 3926:
case 1933:
case 3557:
case 71:
case 4007:
case 2595:
case 2637:
case 2130:
case 655:
case 103:
case 1318:
case 952:
case 3090:
case 1080:
case 2381:
case 347:
case 2500:
case 1342:
case 68:
case 1918:
case 1698:
case 616:
case 2811:
case 1860:
case 2981:
case 1456:
case 2594:
case 1806:
case 2253:
case 150:
case 1969:
case 1558:
case 4064:
case 3606:
case 973:
case 2419:
case 631:
case 2838:
case 1168:
case 1369:
case 1331:
case 113:
case 688:
case 691:
case 2574:
case 1180:
case 208:
case 669:
case 1922:
case 70:
case 4065:
case 3535:
case 589:
case 3317:
case 1779:
case 2383:
case 3213:
case 3027:
case 614:
case 3401:
case 2448:
case 3640:
case 3900:
case 3459:
case 3394:
case 4025:
case 3116:
case 841:
case 3995:
case 3615:
case 3238:
case 784:
case 2957:
case 3796:
case 4024:
case 905:
case 2526:
case 1573:
case 1929:
case 670:
case 1792:
case 3047:
case 2428:
case 3620:
case 3776:
case 2935:
case 2298:
case 3375:
case 2517:
case 1708:
case 956:
case 1028:
case 3764:
case 3366:
case 3016:
case 523:
case 1148:
case 1349:
case 4044:
case 3374:
case 1237:
case 1949:
case 1609:
case 4010:
case 2100:
case 1632:
case 3570:
case 1474:
case 656:
case 1058:
case 2316:
case 2194:
case 615:
case 46:
case 1245:
case 1850:
case 2872:
case 2916:
case 3650:
case 240:
case 2074:
case 258:
case 3157:
case 2195:
case 3821:
case 887:
case 3279:
case 1903:
case 785:
case 1643:
case 2714:
case 2261:
case 2239:
case 2947:
case 1210:
case 3567:
case 2607:
case 758:
case 174:
case 3299:
case 740:
case 889:
case 3057:
case 1225:
case 914:
case 1641:
case 1836:
case 1901:
case 605:
case 902:
case 285:
case 3504:
case 2664:
case 2263:
case 1959:
case 3841:
case 970:
case 3484:
case 2808:
case 3636:
case 2327:
case 1301:
case 110:
case 2892:
case 468:
case 2166:
case 2094:
case 2682:
case 3823:
case 489:
case 2967:
case 3547:
case 2241:
case 3208:
case 3422:
case 2788:
case 988:
case 1173:
case 1264:
case 1663:
case 1417:
case 991:
case 2367:
case 2017:
case 1093:
case 1282:
case 1528:
case 541:
case 398:
case 3431:
case 3469:
case 381:
case 1071:
case 2370:
case 3737:
case 1446:
case 161:
case 3930:
case 2046:
case 2471:
case 3181:
case 338:
case 654:
case 1952:
case 139:
case 1191:
case 3330:
case 2304:
case 3442:
case 1512:
case 3356:
case 197:
case 2390:
case 3861:
case 2491:
case 3755:
case 3418:
case 3839:
case 1713:
case 137:
case 3956:
case 2610:
case 1207:
case 1548:
case 1639:
case 2473:
case 2117:
case 98:
case 1426:
case 2026:
case 955:
case 2905:
case 3754:
case 652:
case 1738:
case 3433:
case 2706:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1772179202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,];
var gg_b = "1772179202/";

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
