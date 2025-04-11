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
case 1405:
case 1344:
case 16:
case 138:
case 2005:
case 3656:
case 603:
case 2196:
case 2382:
case 1514:
case 1050:
case 3266:
case 1644:
case 3459:
case 2957:
case 3945:
case 2682:
case 2939:
case 2554:
case 3437:
case 3854:
case 481:
case 3019:
case 3373:
case 1917:
case 1754:
case 3930:
case 3958:
case 4026:
case 3509:
case 2755:
case 3141:
case 2160:
case 6:
case 214:
case 1700:
case 3436:
case 2630:
case 1847:
case 584:
case 3639:
case 1228:
case 3169:
case 2330:
case 3483:
case 2358:
case 4027:
case 2973:
case 1916:
case 2202:
case 147:
case 3982:
case 120:
case 1618:
case 1072:
case 2645:
case 3657:
case 3103:
case 2472:
case 1981:
case 924:
case 2515:
case 1548:
case 3815:
case 90:
case 189:
case 2863:
case 1591:
case 1318:
case 3723:
case 3592:
case 631:
case 2956:
case 1442:
case 1060:
case 2460:
case 1675:
case 482:
case 3029:
case 4016:
case 3136:
case 2484:
case 104:
case 592:
case 900:
case 3366:
case 3878:
case 3469:
case 2020:
case 3183:
case 1420:
case 128:
case 3273:
case 2564:
case 3999:
case 117:
case 509:
case 3403:
case 2497:
case 2172:
case 3589:
case 1764:
case 4081:
case 1524:
case 2990:
case 2877:
case 3577:
case 2230:
case 2258:
case 2525:
case 1105:
case 2668:
case 2399:
case 2138:
case 3690:
case 1096:
case 975:
case 1725:
case 2368:
case 1813:
case 1565:
case 1218:
case 160:
case 3667:
case 779:
case 1110:
case 2602:
case 1926:
case 3137:
case 2374:
case 2966:
case 1485:
case 2853:
case 2302:
case 3832:
case 2674:
case 964:
case 1538:
case 923:
case 1550:
case 630:
case 653:
case 2414:
case 3805:
case 915:
case 1125:
case 3759:
case 2505:
case 3113:
case 2165:
case 1608:
case 121:
case 2738:
case 1859:
case 3649:
case 2622:
case 1906:
case 3810:
case 583:
case 1454:
case 1362:
case 2340:
case 3361:
case 266:
case 4011:
case 2322:
case 3349:
case 1132:
case 225:
case 3251:
case 213:
case 2819:
case 2640:
case 1836:
case 946:
case 3940:
case 2961:
case 480:
case 795:
case 3009:
case 1178:
case 3922:
case 3736:
case 1270:
case 3447:
case 2871:
case 1180:
case 3571:
case 1634:
case 1572:
case 2704:
case 3423:
case 1288:
case 3935:
case 958:
case 628:
case 2772:
case 1504:
case 3092:
case 2491:
case 1334:
case 3063:
case 177:
case 154:
case 885:
case 1720:
case 689:
case 916:
case 2542:
case 963:
case 1560:
case 1478:
case 2784:
case 1869:
case 4007:
case 3820:
case 2520:
case 3798:
case 274:
case 2078:
case 2760:
case 3147:
case 3741:
case 2155:
case 1742:
case 1208:
case 161:
case 1480:
case 559:
case 1352:
case 235:
case 2191:
case 1987:
case 3703:
case 1652:
case 1:
case 3261:
case 1979:
case 226:
case 488:
case 2148:
case 1115:
case 1596:
case 796:
case 1933:
case 2951:
case 1425:
case 395:
case 2796:
case 1065:
case 3076:
case 469:
case 3912:
case 1911:
case 63:
case 668:
case 787:
case 1785:
case 1388:
case 2032:
case 3431:
case 638:
case 4006:
case 1432:
case 103:
case 749:
case 3146:
case 2516:
case 3422:
case 2021:
case 1421:
case 1049:
case 1194:
case 2955:
case 302:
case 1407:
case 540:
case 4078:
case 996:
case 3093:
case 1289:
case 3224:
case 1061:
case 745:
case 2461:
case 1277:
case 3440:
case 527:
case 3782:
case 518:
case 3614:
case 1781:
case 1915:
case 435:
case 1179:
case 35:
case 2581:
case 3923:
case 3881:
case 3008:
case 2756:
case 51:
case 987:
case 465:
case 3518:
case 1186:
case 2818:
case 2623:
case 1557:
case 555:
case 1363:
case 239:
case 2757:
case 3691:
case 2914:
case 3745:
case 763:
case 2231:
case 1253:
case 889:
case 1830:
case 3946:
case 2347:
case 2739:
case 847:
case 3758:
case 3730:
case 2213:
case 1276:
case 443:
case 820:
case 3324:
case 1486:
case 2086:
case 537:
case 828:
case 1389:
case 2451:
case 3624:
case 2246:
case 567:
case 746:
case 1689:
case 345:
case 1925:
case 1932:
case 4054:
case 293:
case 75:
case 2875:
case 1566:
case 3575:
case 799:
case 3214:
case 1411:
case 2011:
case 3826:
case 3412:
case 301:
case 1095:
case 2331:
case 3774:
case 3122:
case 2149:
case 3801:
case 1494:
case 1978:
case 1121:
case 556:
case 350:
case 1701:
case 2527:
case 1653:
case 316:
case 229:
case 3702:
case 1874:
case 3291:
case 2767:
case 2161:
case 363:
case 1209:
case 1590:
case 2087:
case 1376:
case 2924:
case 830:
case 1487:
case 2079:
case 686:
case 3799:
case 1868:
case 3843:
case 2543:
case 2613:
case 2247:
case 54:
case 3255:
case 1743:
case 3768:
case 821:
case 282:
case 4042:
case 2167:
case 352:
case 3297:
case 1319:
case 1073:
case 570:
case 444:
case 1101:
case 2521:
case 3562:
case 1840:
case 1561:
case 186:
case 2893:
case 512:
case 2507:
case 2337:
case 3174:
case 4020:
case 3735:
case 2359:
case 1143:
case 2456:
case 2190:
case 3638:
case 2904:
case 764:
case 1056:
case 3260:
case 308:
case 751:
case 979:
case 1481:
case 3350:
case 2972:
case 862:
case 700:
case 1671:
case 3304:
case 505:
case 1057:
case 2834:
case 2457:
case 3018:
case 3534:
case 1905:
case 1706:
case 3458:
case 3430:
case 2636:
case 877:
case 1417:
case 541:
case 2439:
case 3937:
case 2336:
case 3806:
case 4005:
case 2237:
case 752:
case 3145:
case 2586:
case 776:
case 861:
case 2751:
case 1733:
case 2157:
case 2603:
case 3697:
case 854:
case 185:
case 3397:
case 2303:
case 2996:
case 1219:
case 3552:
case 1985:
case 2795:
case 3075:
case 3660:
case 2466:
case 724:
case 2369:
case 3130:
case 4010:
case 2698:
case 364:
case 3158:
case 1117:
case 3684:
case 1711:
case 1595:
case 351:
case 708:
case 2139:
case 281:
case 2398:
case 334:
case 2511:
case 2026:
case 2467:
case 506:
case 3588:
case 2888:
case 1401:
case 2594:
case 2960:
case 1942:
case 542:
case 1427:
case 3998:
case 2027:
case 3474:
case 2579:
case 1443:
case 407:
case 2490:
case 803:
case 1090:
case 3903:
case 1181:
case 3396:
case 3028:
case 578:
case 3182:
case 784:
case 2550:
case 2538:
case 2125:
case 221:
case 1750:
case 3176:
case 4051:
case 1635:
case 2859:
case 2705:
case 3211:
case 3621:
case 3307:
case 1510:
case 1622:
case 1340:
case 2362:
case 3719:
case 3321:
case 1322:
case 166:
case 3607:
case 2252:
case 1640:
case 4095:
case 232:
case 3233:
case 2662:
case 3046:
case 3536:
case 3287:
case 3409:
case 2178:
case 2921:
case 942:
case 2055:
case 2572:
case 1704:
case 2634:
case 3908:
case 3023:
case 2180:
case 97:
case 2288:
case 3492:
case 2334:
case 3771:
case 2091:
case 3804:
case 1124:
case 1772:
case 2504:
case 978:
case 2415:
case 1448:
case 3463:
case 644:
case 1015:
case 277:
case 2048:
case 2584:
case 1312:
case 3884:
case 4049:
case 3311:
case 3598:
case 2720:
case 2560:
case 3860:
case 231:
case 1829:
case 970:
case 1520:
case 2100:
case 174:
case 1612:
case 1235:
case 3611:
case 1784:
case 4061:
case 261:
case 2208:
case 912:
case 3729:
case 1155:
case 2803:
case 2597:
case 1080:
case 222:
case 2480:
case 1222:
case 2:
case 1240:
case 3477:
case 3633:
case 3386:
case 165:
case 2293:
case 3207:
case 126:
case 614:
case 2979:
case 1114:
case 3687:
case 2596:
case 3679:
case 1025:
case 3387:
case 2986:
case 1465:
case 2670:
case 2911:
case 2688:
case 941:
case 2785:
case 391:
case 3453:
case 1032:
case 1585:
case 238:
case 26:
case 937:
case 2275:
case 643:
case 2514:
case 2038:
case 3381:
case 1196:
case 23:
case 3059:
case 790:
case 4066:
case 1554:
case 1010:
case 2410:
case 3037:
case 3419:
case 2185:
case 1160:
case 1809:
case 3129:
case 972:
case 3243:
case 3617:
case 1184:
case 869:
case 2700:
case 114:
case 910:
case 3709:
case 3855:
case 2120:
case 3083:
case 2916:
case 1973:
case 1358:
case 1330:
case 247:
case 3763:
case 107:
case 2715:
case 398:
case 2981:
case 1197:
case 2072:
case 1645:
case 3792:
case 220:
case 2618:
case 3471:
case 289:
case 3848:
case 1274:
case 2548:
case 1515:
case 3227:
case 94:
case 2004:
case 3891:
case 1404:
case 2591:
case 1345:
case 2675:
case 2442:
case 3326:
case 204:
case 3098:
case 596:
case 1967:
case 1282:
case 657:
case 3626:
case 486:
case 1020:
case 2244:
case 3216:
case 918:
case 1172:
case 4056:
case 3928:
case 3171:
case 3777:
case 2097:
case 2764:
case 91:
case 1877:
case 587:
case 3824:
case 1104:
case 625:
case 1399:
case 1668:
case 3643:
case 3217:
case 1525:
case 666:
case 1230:
case 613:
case 2096:
case 1765:
case 1496:
case 636:
case 2628:
case 2565:
case 1876:
case 2218:
case 1245:
case 3753:
case 3601:
case 3327:
case 2732:
case 2926:
case 4039:
case 3119:
case 971:
case 79:
case 1966:
case 759:
case 1302:
case 3627:
case 4060:
case 2319:
case 1203:
case 3762:
case 310:
case 1167:
case 1761:
case 563:
case 2101:
case 3793:
case 3522:
case 2549:
case 42:
case 2822:
case 3849:
case 2561:
case 2840:
case 3861:
case 372:
case 3540:
case 1862:
case 533:
case 1749:
case 2721:
case 1359:
case 34:
case 417:
case 825:
case 959:
case 2056:
case 1904:
case 1241:
case 2229:
case 1456:
case 348:
case 3220:
case 2835:
case 1659:
case 297:
case 3444:
case 3128:
case 1081:
case 1808:
case 367:
case 1457:
case 545:
case 3418:
case 2671:
case 2905:
case 337:
case 693:
case 3734:
case 1166:
case 3175:
case 460:
case 3919:
case 2417:
case 3058:
case 1636:
case 501:
case 2706:
case 1439:
case 2039:
case 453:
case 2126:
case 1506:
case 2910:
case 857:
case 1336:
case 1683:
case 523:
case 438:
case 1603:
case 515:
case 4050:
case 3752:
case 3118:
case 285:
case 772:
case 2786:
case 2219:
case 1996:
case 1852:
case 1303:
case 1533:
case 2551:
case 3851:
case 3475:
case 371:
case 3642:
case 74:
case 1795:
case 2629:
case 983:
case 2711:
case 3320:
case 826:
case 865:
case 1369:
case 181:
case 1139:
case 3342:
case 2426:
case 1511:
case 2067:
case 990:
case 1467:
case 327:
case 2401:
case 1888:
case 2116:
case 3685:
case 3929:
case 2942:
case 1960:
case 1027:
case 3788:
case 1984:
case 2794:
case 1579:
case 2443:
case 1043:
case 447:
case 420:
case 4072:
case 558:
case 1587:
case 2090:
case 843:
case 1283:
case 3144:
case 2787:
case 1870:
case 599:
case 1997:
case 3654:
case 2194:
case 3022:
case 3873:
case 2900:
case 1449:
case 3264:
case 2573:
case 1516:
case 3280:
case 2289:
case 306:
case 1007:
case 2716:
case 3354:
case 2407:
case 1461:
case 3909:
case 2061:
case 461:
case 422:
case 2781:
case 2187:
case 1991:
case 3856:
case 909:
case 2179:
case 694:
case 378:
case 3963:
case 1948:
case 1756:
case 4:
case 3170:
case 3035:
case 2557:
case 1623:
case 681:
case 2392:
case 3434:
case 2845:
case 1818:
case 3545:
case 3315:
case 2363:
case 1323:
case 1151:
case 1914:
case 575:
case 1757:
case 169:
case 3615:
case 814:
case 770:
case 2253:
case 3300:
case 551:
case 3225:
case 3600:
case 2406:
case 2717:
case 403:
case 1195:
case 311:
case 2276:
case 564:
case 1213:
case 3976:
case 3134:
case 2377:
case 4014:
case 1086:
case 2389:
case 742:
case 3664:
case 1033:
case 1246:
case 706:
case 3380:
case 2433:
case 844:
case 2689:
case 305:
case 3364:
case 3953:
case 3378:
case 462:
case 778:
case 1011:
case 3678:
case 1495:
case 341:
case 991:
case 3775:
case 2121:
case 2978:
case 1149:
case 3488:
case 2353:
case 1223:
case 312:
case 2567:
case 984:
case 2874:
case 3215:
case 2263:
case 129:
case 4055:
case 1161:
case 1767:
case 2292:
case 576:
case 1924:
case 3890:
case 3728:
case 2209:
case 2868:
case 1079:
case 3108:
case 2980:
case 50:
case 2676:
case 3599:
case 3200:
case 2964:
case 477:
case 2743:
case 612:
case 2350:
case 3081:
case 1971:
case 781:
case 3269:
case 208:
case 1535:
case 2044:
case 907:
case 1220:
case 1708:
case 3190:
case 2650:
case 3456:
case 670:
case 3241:
case 3904:
case 1605:
case 2735:
case 3359:
case 2168:
case 3893:
case 3507:
case 914:
case 3749:
case 2174:
case 2936:
case 2722:
case 2562:
case 1540:
case 172:
case 1861:
case 1849:
case 3473:
case 2102:
case 3016:
case 3521:
case 3637:
case 382:
case 252:
case 2740:
case 110:
case 3203:
case 2806:
case 3506:
case 3439:
case 3017:
case 809:
case 1919:
case 3166:
case 1175:
case 1734:
case 2604:
case 794:
case 3938:
case 2304:
case 2445:
case 1418:
case 3834:
case 1045:
case 2672:
case 167:
case 234:
case 3398:
case 2811:
case 3669:
case 1620:
case 2384:
case 3341:
case 1895:
case 973:
case 381:
case 2130:
case 3698:
case 2712:
case 1205:
case 2238:
case 1642:
case 3641:
case 1851:
case 3303:
case 3852:
case 3996:
case 155:
case 3586:
case 1752:
case 2886:
case 3751:
case 611:
case 2697:
case 3157:
case 3237:
case 782:
case 642:
case 3997:
case 2903:
case 2396:
case 2570:
case 1428:
case 891:
case 1099:
case 3283:
case 2499:
case 3490:
case 3043:
case 2468:
case 3579:
case 606:
case 2879:
case 1074:
case 3984:
case 2998:
case 1788:
case 2204:
case 1929:
case 3173:
case 67:
case 2588:
case 2402:
case 3888:
case 2894:
case 3594:
case 140:
case 200:
case 2272:
case 17:
case 1035:
case 1278:
case 4089:
case 2435:
case 2923:
case 640:
case 2881:
case 2008:
case 3756:
case 1408:
case 1582:
case 2314:
case 4077:
case 3948:
case 178:
case 38:
case 1744:
case 25:
case 793:
case 3991:
case 2614:
case 2224:
case 1462:
case 1909:
case 2440:
case 1493:
case 246:
case 1354:
case 3007:
case 106:
case 61:
case 3773:
case 142:
case 3346:
case 202:
case 2816:
case 1873:
case 618:
case 1022:
case 1654:
case 3647:
case 3195:
case 4053:
case 1600:
case 898:
case 2758:
case 2730:
case 936:
case 2946:
case 1530:
case 925:
case 966:
case 3517:
case 1300:
case 89:
case 655:
case 3231:
case 215:
case 3757:
case 729:
case 3151:
case 2691:
case 223:
case 1152:
case 1718:
case 2745:
case 2348:
case 339:
case 780:
case 495:
case 2518:
case 1545:
case 2034:
case 3766:
case 1775:
case 141:
case 3495:
case 3011:
case 2826:
case 3526:
case 3875:
case 637:
case 1364:
case 105:
case 245:
case 2052:
case 1664:
case 1254:
case 2324:
case 2913:
case 1134:
case 3965:
case 935:
case 449:
case 4063:
case 2135:
case 2665:
case 610:
case 2255:
case 2070:
case 2528:
case 3790:
case 1108:
case 1625:
case 1989:
case 3543:
case 1568:
case 926:
case 1728:
case 3313:
case 2365:
case 3924:
case 769:
case 1162:
case 170:
case 3161:
case 263:
case 2827:
case 3527:
case 3631:
case 1574:
case 2702:
case 1215:
case 1867:
case 112:
case 739:
case 233:
case 3331:
case 2774:
case 3094:
case 3149:
case 3501:
case 1046:
case 2251:
case 313:
case 401:
case 2661:
case 560:
case 1607:
case 366:
case 3322:
case 2737:
case 1321:
case 325:
case 735:
case 3340:
case 2810:
case 1621:
case 1537:
case 445:
case 1211:
case 939:
case 3212:
case 3635:
case 2113:
case 3165:
case 1934:
case 3738:
case 810:
case 4052:
case 2805:
case 969:
case 3505:
case 856:
case 1850:
case 872:
case 3414:
case 683:
case 2063:
case 109:
case 98:
case 1463:
case 3448:
case 249:
case 3772:
case 4070:
case 1771:
case 517:
case 1492:
case 2935:
case 988:
case 287:
case 1294:
case 357:
case 3871:
case 690:
case 2423:
case 463:
case 2447:
case 504:
case 3455:
case 1047:
case 52:
case 867:
case 1606:
case 416:
case 1409:
case 528:
case 1287:
case 1962:
case 1536:
case 837:
case 296:
case 1306:
case 458:
case 326:
case 1207:
case 713:
case 2089:
case 365:
case 219:
case 2651:
case 725:
case 3191:
case 1386:
case 2077:
case 3424:
case 2703:
case 3240:
case 766:
case 3222:
case 2249:
case 1221:
case 335:
case 1686:
case 2351:
case 736:
case 1503:
case 3080:
case 2123:
case 1970:
case 589:
case 2741:
case 980:
case 2695:
case 3155:
case 1729:
case 698:
case 4093:
case 1988:
case 3612:
case 374:
case 3520:
case 2529:
case 3542:
case 402:
case 2842:
case 1541:
case 1860:
case 1598:
case 184:
case 659:
case 1884:
case 2769:
case 2146:
case 3585:
case 343:
case 2885:
case 2431:
case 81:
case 1453:
case 1394:
case 191:
case 757:
case 3995:
case 2912:
case 818:
case 415:
case 1206:
case 2413:
case 423:
case 3465:
case 538:
case 840:
case 56:
case 2076:
case 295:
case 3025:
case 1679:
case 1896:
case 1952:
case 1687:
case 568:
case 2373:
case 2930:
case 878:
case 2958:
case 1419:
case 1546:
case 1037:
case 503:
case 1616:
case 2673:
case 87:
case 3554:
case 2437:
case 2854:
case 2746:
case 3714:
case 2945:
case 3682:
case 1059:
case 2459:
case 1381:
case 3196:
case 3450:
case 3438:
case 744:
case 2266:
case 475:
case 2723:
case 1891:
case 3956:
case 3892:
case 4028:
case 3515:
case 3274:
case 2815:
case 3863:
case 1848:
case 2982:
case 1471:
case 2103:
case 3197:
case 1523:
case 773:
case 1201:
case 1944:
case 5:
case 2169:
case 3358:
case 3973:
case 3299:
case 3500:
case 1547:
case 554:
case 1709:
case 3658:
case 2198:
case 3630:
case 2436:
case 1036:
case 561:
case 3755:
case 1129:
case 400:
case 2141:
case 3160:
case 2747:
case 3104:
case 1824:
case 2577:
case 2968:
case 3889:
case 577:
case 1777:
case 2880:
case 1928:
case 3497:
case 3564:
case 2273:
case 424:
case 2878:
case 2183:
case 3020:
case 2902:
case 1281:
case 190:
case 3967:
case 2366:
case 2136:
case 2974:
case 2498:
case 3484:
case 1326:
case 805:
case 2256:
case 1429:
case 2666:
case 3460:
case 452:
case 2553:
case 1627:
case 562:
case 3853:
case 3674:
case 1301:
case 3085:
case 2367:
case 1975:
case 1119:
case 183:
case 1327:
case 3374:
case 3245:
case 707:
case 2257:
case 1865:
case 3876:
case 2576:
case 812:
case 2159:
case 3368:
case 3138:
case 3496:
case 2690:
case 3765:
case 2713:
case 714:
case 3230:
case 1217:
case 3399:
case 1435:
case 1314:
case 2408:
case 1008:
case 1881:
case 2744:
case 3179:
case 3915:
case 2963:
case 3781:
case 3187:
case 1614:
case 1782:
case 1062:
case 1224:
case 3716:
case 1093:
case 206:
case 2354:
case 3407:
case 1947:
case 2280:
case 3194:
case 2022:
case 3421:
case 2873:
case 1816:
case 3573:
case 1422:
case 2188:
case 1655:
case 962:
case 211:
case 1265:
case 3276:
case 879:
case 1112:
case 2600:
case 3406:
case 1758:
case 3717:
case 4031:
case 675:
case 1355:
case 3609:
case 1817:
case 3858:
case 2530:
case 115:
case 3663:
case 1648:
case 2232:
case 3253:
case 1745:
case 123:
case 4013:
case 1691:
case 3133:
case 3363:
case 634:
case 3557:
case 3392:
case 2857:
case 1034:
case 2545:
case 1391:
case 3186:
case 2678:
case 3566:
case 1575:
case 2866:
case 1931:
case 3932:
case 3925:
case 3689:
case 205:
case 2364:
case 2452:
case 3433:
case 3389:
case 2664:
case 2134:
case 3377:
case 2680:
case 1324:
case 2599:
case 2200:
case 1135:
case 409:
case 3899:
case 3964:
case 1768:
case 3743:
case 1528:
case 2108:
case 1255:
case 1070:
case 3980:
case 652:
case 1665:
case 3479:
case 0:
case 1843:
case 2989:
case 1799:
case 3487:
case 4023:
case 2890:
case 1365:
case 3376:
case 3590:
case 2728:
case 3209:
case 163:
case 270:
case 2162:
case 931:
case 1291:
case 2574:
case 1702:
case 3263:
case 2193:
case 60:
case 3653:
case 3701:
case 624:
case 1827:
case 133:
case 3567:
case 2867:
case 3978:
case 3121:
case 2332:
case 1774:
case 3802:
case 2128:
case 1482:
case 1508:
case 1350:
case 3481:
case 650:
case 1338:
case 2082:
case 1044:
case 3835:
case 1199:
case 2305:
case 947:
case 2444:
case 663:
case 3056:
case 1260:
case 1638:
case 3229:
case 2708:
case 1168:
case 24:
case 10:
case 989:
case 1735:
case 124:
case 1936:
case 1593:
case 256:
case 3127:
case 1807:
case 386:
case 4069:
case 3721:
case 3840:
case 3619:
case 785:
case 1983:
case 3101:
case 176:
case 3707:
case 2793:
case 3073:
case 3416:
case 3822:
case 3319:
case 529:
case 2762:
case 1297:
case 1740:
case 210:
case 1937:
case 3039:
case 483:
case 2058:
case 2030:
case 849:
case 1458:
case 3706:
case 1372:
case 3371:
case 2734:
case 3905:
case 896:
case 96:
case 938:
case 1534:
case 1672:
case 3057:
case 1304:
case 93:
case 3812:
case 1384:
case 2512:
case 2620:
case 3426:
case 1811:
case 2895:
case 1360:
case 797:
case 151:
case 960:
case 3329:
case 2342:
case 1684:
case 4037:
case 1712:
case 164:
case 1660:
case 623:
case 2475:
case 3066:
case 1075:
case 271:
case 3985:
case 3219:
case 786:
case 2851:
case 255:
case 4059:
case 385:
case 569:
case 3733:
case 2210:
case 175:
case 3787:
case 3181:
case 1499:
case 3779:
case 2099:
case 588:
case 2770:
case 3090:
case 1696:
case 1468:
case 498:
case 2068:
case 895:
case 1998:
case 4083:
case 92:
case 699:
case 3427:
case 2685:
case 3942:
case 1204:
case 227:
case 658:
case 1894:
case 3401:
case 1588:
case 1402:
case 3116:
case 1272:
case 100:
case 240:
case 1958:
case 85:
case 2316:
case 1373:
case 3846:
case 2546:
case 3185:
case 1019:
case 543:
case 1673:
case 3410:
case 471:
case 717:
case 2918:
case 802:
case 1356:
case 33:
case 1459:
case 368:
case 455:
case 3050:
case 3514:
case 2814:
case 2381:
case 1656:
case 72:
case 338:
case 36:
case 3344:
case 1357:
case 535:
case 3004:
case 2891:
case 1723:
case 3318:
case 2848:
case 389:
case 1815:
case 1563:
case 259:
case 29:
case 3823:
case 526:
case 3072:
case 2792:
case 320:
case 3618:
case 2471:
case 997:
case 760:
case 2944:
case 347:
case 179:
case 3715:
case 41:
case 298:
case 3120:
case 1800:
case 4074:
case 1483:
case 1169:
case 2855:
case 3847:
case 2547:
case 2617:
case 619:
case 986:
case 427:
case 1436:
case 815:
case 3700:
case 1141:
case 823:
case 1290:
case 3780:
case 2824:
case 696:
case 3764:
case 1968:
case 3943:
case 1403:
case 1880:
case 2928:
case 2171:
case 2003:
case 3097:
case 2216:
case 328:
case 3420:
case 687:
case 1183:
case 1469:
case 3375:
case 290:
case 2281:
case 768:
case 472:
case 73:
case 649:
case 2326:
case 2098:
case 3778:
case 1498:
case 1136:
case 1029:
case 3675:
case 2429:
case 3060:
case 2041:
case 3831:
case 2531:
case 2119:
case 3485:
case 353:
case 1367:
case 789:
case 2753:
case 720:
case 2601:
case 1137:
case 2327:
case 4058:
case 3926:
case 3110:
case 1257:
case 747:
case 1667:
case 3218:
case 566:
case 1239:
case 1576:
case 833:
case 2865:
case 1390:
case 2343:
case 1159:
case 437:
case 1690:
case 863:
case 4045:
case 816:
case 2643:
case 2217:
case 3105:
case 985:
case 467:
case 3252:
case 441:
case 332:
case 1251:
case 2233:
case 3662:
case 80:
case 2321:
case 824:
case 3132:
case 4012:
case 1349:
case 2607:
case 2153:
case 3362:
case 2719:
case 2286:
case 3454:
case 3906:
case 1810:
case 3393:
case 1649:
case 405:
case 3859:
case 2559:
case 876:
case 761:
case 852:
case 1295:
case 3608:
case 2934:
case 1759:
case 2838:
case 3415:
case 149:
case 377:
case 1063:
case 209:
case 3334:
case 2492:
case 2771:
case 1092:
case 3504:
case 2294:
case 3164:
case 3288:
case 3572:
case 3634:
case 2872:
case 3180:
case 2023:
case 1447:
case 544:
case 470:
case 1922:
case 2606:
case 3400:
case 3921:
case 3178:
case 3883:
case 2962:
case 412:
case 2287:
case 2409:
case 2306:
case 196:
case 2993:
case 2279:
case 2536:
case 864:
case 3115:
case 2489:
case 119:
case 732:
case 3293:
case 3:
case 2477:
case 3024:
case 3262:
case 507:
case 1651:
case 2897:
case 3803:
case 2686:
case 322:
case 1351:
case 2333:
case 851:
case 1695:
case 2729:
case 4040:
case 1147:
case 875:
case 1820:
case 721:
case 3994:
case 406:
case 2569:
case 3560:
case 442:
case 1842:
case 1529:
case 1769:
case 4022:
case 2598:
case 2311:
case 354:
case 777:
case 411:
case 303:
case 2453:
case 3388:
case 3234:
case 3785:
case 291:
case 2694:
case 3154:
case 3688:
case 2379:
case 3670:
case 1413:
case 3933:
case 2896:
case 2952:
case 3370:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744340401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,];
var gg_b = "1744340401/";

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
