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
case 619:
case 3914:
case 2977:
case 2856:
case 3992:
case 1720:
case 640:
case 3242:
case 3198:
case 1199:
case 3309:
case 367:
case 2225:
case 4066:
case 2583:
case 4076:
case 1084:
case 153:
case 981:
case 4049:
case 1222:
case 3740:
case 3498:
case 610:
case 2416:
case 3514:
case 1111:
case 1851:
case 3108:
case 649:
case 1658:
case 1018:
case 356:
case 2300:
case 2103:
case 1761:
case 3847:
case 3588:
case 1812:
case 1894:
case 3602:
case 1152:
case 658:
case 1382:
case 3019:
case 3482:
case 3182:
case 698:
case 884:
case 2683:
case 2403:
case 2234:
case 2193:
case 397:
case 2390:
case 3091:
case 2749:
case 2092:
case 3910:
case 1095:
case 1724:
case 1513:
case 1707:
case 755:
case 112:
case 4032:
case 2898:
case 2691:
case 3386:
case 1486:
case 1053:
case 1186:
case 701:
case 1080:
case 1356:
case 2554:
case 3239:
case 807:
case 2263:
case 314:
case 142:
case 3510:
case 795:
case 1913:
case 88:
case 2287:
case 3115:
case 1279:
case 58:
case 2901:
case 2304:
case 1506:
case 2327:
case 1246:
case 2059:
case 2147:
case 627:
case 506:
case 485:
case 2919:
case 739:
case 1613:
case 2732:
case 3610:
case 3226:
case 206:
case 207:
case 2991:
case 2312:
case 2654:
case 2230:
case 2394:
case 1596:
case 2882:
case 3415:
case 3826:
case 3943:
case 373:
case 3293:
case 3920:
case 185:
case 1792:
case 2282:
case 2795:
case 2024:
case 2007:
case 111:
case 1285:
case 1523:
case 3520:
case 1702:
case 2629:
case 331:
case 141:
case 3072:
case 1846:
case 3255:
case 388:
case 1869:
case 1923:
case 60:
case 1879:
case 2753:
case 1334:
case 2536:
case 702:
case 1940:
case 3878:
case 3543:
case 903:
case 3203:
case 2873:
case 2863:
case 3758:
case 412:
case 1445:
case 3961:
case 970:
case 2887:
case 309:
case 82:
case 1640:
case 1838:
case 3374:
case 1464:
case 2317:
case 1631:
case 1474:
case 3364:
case 1174:
case 176:
case 3571:
case 3561:
case 4080:
case 3789:
case 4053:
case 3643:
case 4005:
case 3216:
case 1227:
case 43:
case 1204:
case 850:
case 899:
case 3036:
case 3333:
case 1433:
case 2369:
case 3130:
case 3907:
case 2834:
case 535:
case 2478:
case 2020:
case 3321:
case 569:
case 3713:
case 3524:
case 3507:
case 3997:
case 3247:
case 2178:
case 548:
case 2168:
case 560:
case 1133:
case 235:
case 1294:
case 982:
case 2784:
case 218:
case 3441:
case 1212:
case 783:
case 3697:
case 1665:
case 3187:
case 590:
case 2662:
case 1457:
case 848:
case 493:
case 1028:
case 3796:
case 3370:
case 3173:
case 3360:
case 2439:
case 3473:
case 4084:
case 1160:
case 3842:
case 869:
case 2256:
case 259:
case 1049:
case 1157:
case 3607:
case 3487:
case 3048:
case 604:
case 3535:
case 599:
case 550:
case 721:
case 2790:
case 1253:
case 2349:
case 3925:
case 2063:
case 827:
case 3039:
case 1574:
case 2366:
case 1564:
case 1038:
case 2542:
case 2448:
case 3752:
case 389:
case 2087:
case 2429:
case 2942:
case 2:
case 1295:
case 380:
case 3277:
case 2785:
case 2700:
case 1371:
case 3634:
case 3525:
case 1964:
case 191:
case 1798:
case 3120:
case 3323:
case 2288:
case 2807:
case 2824:
case 3799:
case 3143:
case 978:
case 105:
case 2030:
case 1674:
case 2136:
case 3331:
case 308:
case 1131:
case 68:
case 1079:
case 1343:
case 1140:
case 3625:
case 3862:
case 3872:
case 1046:
case 151:
case 462:
case 1320:
case 526:
case 527:
case 983:
case 3420:
case 3078:
case 3068:
case 3973:
case 3829:
case 2794:
case 1715:
case 1284:
case 1022:
case 268:
case 1570:
case 1560:
case 413:
case 2712:
case 510:
case 3135:
case 3987:
case 2668:
case 1828:
case 549:
case 519:
case 1849:
case 568:
case 1335:
case 3435:
case 1866:
case 1876:
case 540:
case 1957:
case 2704:
case 3563:
case 3630:
case 3641:
case 1960:
case 3254:
case 249:
case 1970:
case 1475:
case 3375:
case 598:
case 3124:
case 1657:
case 3107:
case 3930:
case 1444:
case 840:
case 4094:
case 4012:
case 258:
case 437:
case 3291:
case 436:
case 1660:
case 1756:
case 3663:
case 3673:
case 3530:
case 4027:
case 1218:
case 3786:
case 849:
case 174:
case 298:
case 3541:
case 1933:
case 2526:
case 1307:
case 3687:
case 558:
case 3197:
case 3608:
case 3047:
case 3582:
case 1094:
case 1725:
case 2903:
case 3819:
case 2593:
case 965:
case 2015:
case 35:
case 939:
case 347:
case 2722:
case 137:
case 3389:
case 1489:
case 3459:
case 2717:
case 2503:
case 1359:
case 930:
case 1699:
case 3698:
case 3745:
case 618:
case 1552:
case 1458:
case 669:
case 3358:
case 1509:
case 3998:
case 3248:
case 371:
case 3402:
case 3114:
case 650:
case 699:
case 2395:
case 2477:
case 3102:
case 3414:
case 2467:
case 1314:
case 2516:
case 3492:
case 1911:
case 901:
case 659:
case 2655:
case 1884:
case 2483:
case 1228:
case 1051:
case 2603:
case 143:
case 995:
case 2271:
case 491:
case 3272:
case 50:
case 2947:
case 875:
case 364:
case 586:
case 1763:
case 923:
case 1773:
case 587:
case 1686:
case 4069:
case 2681:
case 4079:
case 3770:
case 2401:
case 2888:
case 3760:
case 4046:
case 1496:
case 2191:
case 3396:
case 3515:
case 3757:
case 451:
case 2224:
case 286:
case 2547:
case 354:
case 2981:
case 3956:
case 275:
case 2892:
case 1586:
case 2384:
case 4038:
case 192:
case 3313:
case 3016:
case 1113:
case 715:
case 1310:
case 1232:
case 2647:
case 1880:
case 1805:
case 394:
case 3733:
case 2454:
case 2779:
case 80:
case 2802:
case 1986:
case 2746:
case 812:
case 1147:
case 2735:
case 3221:
case 1919:
case 1732:
case 2890:
case 525:
case 605:
case 900:
case 2279:
case 3194:
case 1591:
case 3852:
case 379:
case 42:
case 1327:
case 2506:
case 3427:
case 1059:
case 107:
case 651:
case 909:
case 370:
case 1654:
case 3412:
case 1501:
case 2906:
case 1230:
case 2315:
case 2037:
case 1519:
case 1088:
case 842:
case 1898:
case 3270:
case 3260:
case 1954:
case 1351:
case 2606:
case 1181:
case 1092:
case 4035:
case 931:
case 2707:
case 212:
case 2724:
case 2513:
case 1002:
case 2238:
case 1619:
case 3809:
case 1287:
case 3381:
case 2053:
case 2080:
case 1601:
case 2696:
case 1263:
case 512:
case 3618:
case 3605:
case 2812:
case 2152:
case 3537:
case 2894:
case 4020:
case 1815:
case 2382:
case 1493:
case 780:
case 2761:
case 2771:
case 3653:
case 460:
case 1300:
case 448:
case 2589:
case 418:
case 1766:
case 3303:
case 3100:
case 1403:
case 789:
case 1390:
case 1234:
case 1193:
case 3695:
case 3748:
case 1677:
case 2804:
case 321:
case 674:
case 2827:
case 3355:
case 2743:
case 2217:
case 3274:
case 2199:
case 3736:
case 2409:
case 83:
case 424:
case 4061:
case 3580:
case 3995:
case 3505:
case 553:
case 1977:
case 1116:
case 2720:
case 1010:
case 184:
case 3595:
case 3316:
case 1567:
case 593:
case 3886:
case 1225:
case 1550:
case 253:
case 2084:
case 2109:
case 3953:
case 3980:
case 1718:
case 1061:
case 2470:
case 91:
case 996:
case 199:
case 997:
case 2822:
case 3138:
case 2665:
case 4010:
case 613:
case 1662:
case 2457:
case 3719:
case 3532:
case 2157:
case 1338:
case 3438:
case 322:
case 3339:
case 2160:
case 2363:
case 94:
case 2076:
case 3791:
case 957:
case 1256:
case 956:
case 159:
case 1834:
case 1478:
case 3368:
case 2565:
case 2710:
case 2421:
case 729:
case 1126:
case 1572:
case 2204:
case 1043:
case 2544:
case 1346:
case 3446:
case 338:
case 3754:
case 2433:
case 345:
case 2330:
case 135:
case 2294:
case 3179:
case 1784:
case 3146:
case 169:
case 1426:
case 3326:
case 2121:
case 2975:
case 754:
case 1168:
case 1178:
case 720:
case 3209:
case 692:
case 2474:
case 3566:
case 2759:
case 3417:
case 1317:
case 2464:
case 576:
case 1863:
case 1929:
case 1873:
case 3342:
case 1442:
case 811:
case 79:
case 747:
case 1737:
case 1529:
case 1142:
case 841:
case 1948:
case 3860:
case 277:
case 3422:
case 3299:
case 2174:
case 1322:
case 276:
case 928:
case 2325:
case 3528:
case 285:
case 2792:
case 932:
case 1830:
case 1007:
case 1841:
case 733:
case 3777:
case 1648:
case 3767:
case 2285:
case 2540:
case 4059:
case 2531:
case 3666:
case 12:
case 771:
case 585:
case 2290:
case 662:
case 3628:
case 876:
case 3044:
case 3821:
case 241:
case 2702:
case 2846:
case 1705:
case 1097:
case 2869:
case 76:
case 3065:
case 2923:
case 3206:
case 3546:
case 158:
case 3569:
case 2756:
case 2670:
case 1926:
case 2397:
case 1568:
case 2465:
case 714:
case 2475:
case 574:
case 1472:
case 3372:
case 1526:
case 1978:
case 1968:
case 3840:
case 663:
case 3638:
case 2165:
case 2921:
case 3831:
case 971:
case 96:
case 1639:
case 355:
case 3946:
case 2144:
case 274:
case 2933:
case 3823:
case 3969:
case 1871:
case 3213:
case 1668:
case 1794:
case 119:
case 916:
case 99:
case 2284:
case 168:
case 4056:
case 2022:
case 2560:
case 330:
case 3669:
case 1712:
case 110:
case 1539:
case 95:
case 874:
case 3064:
case 2017:
case 149:
case 946:
case 947:
case 1626:
case 653:
case 728:
case 2876:
case 2866:
case 1210:
case 126:
case 3289:
case 2431:
case 1642:
case 3716:
case 1288:
case 2645:
case 2123:
case 766:
case 767:
case 3258:
case 625:
case 2708:
case 3336:
case 2131:
case 1436:
case 920:
case 87:
case 2079:
case 954:
case 2140:
case 1202:
case 2038:
case 1542:
case 3755:
case 891:
case 1129:
case 2545:
case 1790:
case 2253:
case 561:
case 2832:
case 1349:
case 3449:
case 1835:
case 1073:
case 1063:
case 2564:
case 3703:
case 1376:
case 3166:
case 2361:
case 1700:
case 2371:
case 3176:
case 3060:
case 964:
case 27:
case 2974:
case 2964:
case 3793:
case 1148:
case 1429:
case 756:
case 3329:
case 1942:
case 851:
case 1785:
case 1214:
case 292:
case 2413:
case 1098:
case 4087:
case 2741:
case 908:
case 1814:
case 2730:
case 3551:
case 175:
case 3604:
case 3484:
case 4063:
case 4073:
case 378:
case 2805:
case 1769:
case 3612:
case 592:
case 1779:
case 1802:
case 2986:
case 1746:
case 3011:
case 676:
case 252:
case 2310:
case 3768:
case 3778:
case 1647:
case 2196:
case 4041:
case 3739:
case 3527:
case 2406:
case 4030:
case 3858:
case 3244:
case 1859:
case 1119:
case 980:
case 2787:
case 3265:
case 1947:
case 892:
case 3275:
case 3319:
case 1224:
case 1207:
case 852:
case 641:
case 2000:
case 1681:
case 1888:
case 3301:
case 1191:
case 3594:
case 2837:
case 3927:
case 2496:
case 10:
case 3418:
case 1305:
case 3405:
case 3685:
case 543:
case 1916:
case 788:
case 2276:
case 1810:
case 2266:
case 731:
case 2734:
case 2999:
case 1353:
case 213:
case 3480:
case 1183:
case 2249:
case 468:
case 1380:
case 3383:
case 3086:
case 3153:
case 3813:
case 1261:
case 104:
case 449:
case 3495:
case 1395:
case 3377:
case 2314:
case 2652:
case 3367:
case 2392:
case 513:
case 2911:
case 3105:
case 2884:
case 1655:
case 2094:
case 2725:
case 813:
case 3231:
case 1903:
case 1593:
case 237:
case 3500:
case 2012:
case 2489:
case 2158:
case 3585:
case 3223:
case 2611:
case 3437:
case 3896:
case 1955:
case 2818:
case 700:
case 1616:
case 2552:
case 3137:
case 709:
case 1555:
case 2004:
case 1503:
case 1717:
case 3590:
case 3900:
case 498:
case 843:
case 4058:
case 664:
case 1777:
case 1767:
case 3841:
case 1649:
case 531:
case 479:
case 1750:
case 2293:
case 1666:
case 2134:
case 1676:
case 273:
case 1783:
case 588:
case 2878:
case 3780:
case 2868:
case 2661:
case 2203:
case 2062:
case 2255:
case 231:
case 573:
case 1075:
case 912:
case 1252:
case 3705:
case 288:
case 3097:
case 1549:
case 2125:
case 3887:
case 873:
case 1209:
case 2971:
case 2961:
case 925:
case 2364:
case 1417:
case 1122:
case 2758:
case 1342:
case 3442:
case 3863:
case 3929:
case 2839:
case 3035:
case 654:
case 694:
case 2620:
case 1870:
case 2216:
case 3142:
case 3298:
case 831:
case 1949:
case 2789:
case 2561:
case 3478:
case 65:
case 1378:
case 3468:
case 2924:
case 3834:
case 2597:
case 3562:
case 2321:
case 3572:
case 3346:
case 1446:
case 3043:
case 3369:
case 2130:
case 115:
case 752:
case 3379:
case 138:
case 318:
case 3215:
case 4006:
case 145:
case 993:
case 2430:
case 369:
case 2441:
case 617:
case 69:
case 1632:
case 1326:
case 3972:
case 3962:
case 421:
case 2635:
case 3178:
case 350:
case 2370:
case 1701:
case 762:
case 1138:
case 1932:
case 1719:
case 3662:
case 2187:
case 3825:
case 4013:
case 2487:
case 633:
case 2607:
case 122:
case 1864:
case 3338:
case 2535:
case 2842:
case 93:
case 2463:
case 1339:
case 2473:
case 1845:
case 1274:
case 1553:
case 2309:
case 3967:
case 2914:
case 3856:
case 2688:
case 2408:
case 1995:
case 1505:
case 2198:
case 1637:
case 2514:
case 3567:
case 3416:
case 384:
case 705:
case 2498:
case 1595:
case 2902:
case 2592:
case 2659:
case 81:
case 3225:
case 2740:
case 1980:
case 1953:
case 3385:
case 77:
case 3155:
case 596:
case 1190:
case 3493:
case 481:
case 1393:
case 1096:
case 866:
case 3728:
case 672:
case 438:
case 3103:
case 1653:
case 3766:
case 3650:
case 1303:
case 1100:
case 3403:
case 3776:
case 3683:
case 1006:
case 2091:
case 3749:
case 3390:
case 21:
case 296:
case 1490:
case 297:
case 3193:
case 1748:
case 2988:
case 54:
case 3667:
case 2182:
case 4023:
case 1185:
case 121:
case 1937:
case 556:
case 557:
case 3691:
case 2816:
case 244:
case 3898:
case 2050:
case 2386:
case 3351:
case 2156:
case 1451:
case 828:
case 1257:
case 941:
case 2910:
case 3092:
case 774:
case 2077:
case 1899:
case 232:
case 1762:
case 1772:
case 2775:
case 3287:
case 2765:
case 1151:
case 2456:
case 3601:
case 2744:
case 1618:
case 1984:
case 680:
case 214:
case 1811:
case 2803:
case 3919:
case 2278:
case 3591:
case 1233:
case 3901:
case 1852:
case 228:
case 3059:
case 1918:
case 1684:
case 1112:
case 3304:
case 170:
case 3654:
case 1104:
case 1089:
case 3501:
case 306:
case 1518:
case 3230:
case 4044:
case 2893:
case 3519:
case 38:
case 1347:
case 4065:
case 4075:
case 495:
case 1231:
case 3593:
case 3015:
case 86:
case 2389:
case 246:
case 2159:
case 247:
case 59:
case 2801:
case 2047:
case 871:
case 401:
case 3955:
case 2582:
case 776:
case 777:
case 3337:
case 2745:
case 1137:
case 1985:
case 2698:
case 1742:
case 2358:
case 3220:
case 547:
case 1806:
case 455:
case 2764:
case 216:
case 1900:
case 1590:
case 2236:
case 2192:
case 2854:
case 2998:
case 2682:
case 2402:
case 2114:
case 271:
case 26:
case 1480:
case 85:
case 3183:
case 974:
case 3150:
case 741:
case 2081:
case 430:
case 3603:
case 465:
case 233:
case 1153:
case 1086:
case 4074:
case 1383:
case 1180:
case 817:
case 89:
case 816:
case 1813:
case 439:
case 3516:
case 1367:
case 1495:
case 4045:
case 1105:
case 3655:
case 264:
case 820:
case 1244:
case 1739:
case 3101:
case 2306:
case 854:
case 1504:
case 961:
case 2262:
case 3859:
case 1275:
case 1319:
case 3082:
case 3419:
case 2757:
case 1889:
case 3547:
case 3224:
case 386:
case 387:
case 3207:
case 2656:
case 3401:
case 2770:
case 4033:
case 631:
case 2515:
case 1418:
case 3191:
case 2396:
case 1594:
case 1904:
case 688:
case 183:
case 951:
case 529:
case 2883:
case 2016:
case 3098:
case 2313:
case 1726:
case 2956:
case 220:
case 3814:
case 1099:
case 3981:
case 254:
case 3384:
case 1627:
case 3154:
case 1551:
case 1612:
case 1354:
case 3769:
case 2556:
case 2733:
case 4070:
case 1009:
case 905:
case 2615:
case 1694:
case 1951:
case 423:
case 600:
case 991:
case 2721:
case 1011:
case 1768:
case 1778:
case 3647:
case 3542:
case 644:
case 3202:
case 483:
case 3087:
case 763:
case 3448:
case 3129:
case 3349:
case 1128:
case 1922:
case 2161:
case 1466:
case 2171:
case 2039:
case 3835:
case 1070:
case 478:
case 1522:
case 2461:
case 123:
case 589:
case 808:
case 1428:
case 1149:
case 3328:
case 1057:
case 4011:
case 3942:
case 3429:
case 3292:
case 614:
case 3214:
case 73:
case 2277:
case 2340:
case 1289:
case 3824:
case 3807:
case 2934:
case 3136:
case 2331:
case 1617:
case 952:
case 508:
case 628:
case 1716:
case 753:
case 3288:
case 2120:
case 4052:
case 1844:
case 880:
case 2420:
case 793:
case 1865:
case 1336:
case 2534:
case 208:
case 3436:
case 2872:
case 2862:
case 2625:
case 2443:
case 3668:
case 1747:
case 2987:
case 3871:
case 725:
case 3861:
case 1132:
case 666:
case 1646:
case 2829:
case 2963:
case 3025:
case 2973:
case 3939:
case 130:
case 3712:
case 1679:
case 340:
case 368:
case 4086:
case 2630:
case 310:
case 3539:
case 165:
case 2563:
case 349:
case 139:
case 2848:
case 2254:
case 936:
case 2587:
case 1045:
case 2435:
case 1546:
case 2344:
case 943:
case 195:
case 2930:
case 742:
case 1569:
case 2375:
case 3568:
case 64:
case 2497:
case 2107:
case 1362:
case 1372:
case 3462:
case 2124:
case 3843:
case 101:
case 3978:
case 3968:
case 2407:
case 3526:
case 2197:
case 696:
case 1638:
case 61:
case 1946:
case 2786:
case 3751:
case 2530:
case 2673:
case 2663:
case 155:
case 1979:
case 2201:
case 913:
case 2541:
case 3675:
case 2138:
case 2932:
case 2719:
case 3457:
case 1029:
case 1935:
case 3251:
case 787:
case 1370:
case 467:
case 1163:
case 1173:
case 3076:
case 1473:
case 1463:
case 2339:
case 3160:
case 3373:
case 2845:
case 845:
case 1624:
case 2532:
case 222:
case 2438:
case 2446:
case 1141:
case 3204:
case 3433:
case 456:
case 2479:
case 1130:
case 4001:
case 3565:
case 984:
case 2368:
case 1907:
case 1321:
case 4019:
case 3975:
case 2023:
case 2632:
case 1997:
case 3133:
case 2179:
case 3294:
case 496:
case 2040:
case 2342:
case 2211:
case 3623:
case 4077:
case 4067:
case 3032:
case 444:
case 1961:
case 1971:
case 2576:
case 3464:
case 2122:
case 3631:
case 1364:
case 2566:
case 4050:
case 2928:
case 2949:
case 376:
case 2422:
case 3164:
case 2966:
case 2528:
case 1425:
case 1216:
case 3200:
case 2676:
case 173:
case 1134:
case 2783:
case 385:
case 311:
case 3523:
case 1072:
case 1255:
case 3702:
case 2252:
case 2065:
case 2075:
case 3940:
case 1434:
case 3290:
case 1661:
case 1203:
case 2044:
case 2821:
case 2628:
case 279:
case 2233:
case 1115:
case 2918:
case 2684:
case 3506:
case 2427:
case 2404:
case 473:
case 2112:
case 570:
case 749:
case 2058:
case 3613:
case 1610:
case 431:
case 1893:
case 768:
case 4072:
case 488:
case 1226:
case 3885:
case 2104:
case 2412:
case 270:
case 2127:
case 3315:
case 1415:
case 3596:
case 1910:
case 2257:
case 798:
case 3095:
case 3513:
case 3707:
case 2260:
case 2270:
case 203:
case 2584:
case 1050:
case 3486:
case 3606:
case 1156:
case 1083:
case 1456:
case 2151:
case 400:
case 3053:
case 114:
case 870:
case 2618:
case 92:
case 2811:
case 2772:
case 2762:
case 132:
case 1765:
case 623:
case 3797:
case 3005:
case 2809:
case 3913:
case 33:
case 1001:
case 2680:
case 7:
case 882:
case 1847:
case 156:
case 521:
case 2400:
case 157:
case 3761:
case 2485:
case 1588:
case 695:
case 2605:
case 3382:
case 3958:
case 1019:
case 2729:
case 1602:
case 3452:
case 1614:
case 2748:
case 1988:
case 2185:
case 1692:
case 1559:
case 2303:
case 2006:
case 999:
case 1914:
case 1688:
case 3308:
case 1408:
case 2995:
case 1198:
case 630:
case 1502:
case 935:
case 282:
case 3199:
case 3743:
case 3689:
case 1054:
case 1309:
case 353:
case 2980:
case 3222:
case 1723:
case 2316:
case 582:
case 3111:
case 2595:
case 4048:
case 665:
case 3398:
case 1108:
case 2886:
case 3851:
case 726:
case 1592:
case 1877:
case 120:
case 1867:
case 154:
case 3741:
case 2099:
case 4039:
case 2604:
case 283:
case 578:
case 718:
case 1016:
case 1313:
case 3413:
case 1721:
case 3310:
case 748:
case 2768:
case 480:
case 583:
case 927:
case 129:
case 2184:
case 194:
case 1615:
case 3986:
case 2951:
case 9:
case 2275:
case 3787:
case 4026:
case 883:
case 3196:
case 2118:
case 2858:
case 3763:
case 2994:
case 2527:
case 2739:
case 3406:
case 2301:
case 1770:
case 408:
case 3106:
case 2512:
case 1760:
case 3000:
case 2927:
case 1757:
case 750:
case 362:
case 724:
case 3085:
case 2889:
case 3249:
case 998:
case 2480:
case 3509:
case 2600:
case 3734:
case 2453:
case 1854:
case 2405:
case 2195:
case 202:
case 171:
case 3511:
case 1102:
case 72:
case 3314:
case 2495:
case 1598:
case 3884:
case 2105:
case 1492:
case 4042:
case 3392:
case 1229:
case 133:
case 2153:
case 2180:
case 3228:
case 2383:
case 3909:
case 2813:
case 3599:
case 2690:
case 1047:
case 1801:
case 2585:
case 1608:
case 3158:
case 615:
case 3818:
case 2896:
case 638:
case 2437:
case 2231:
case 910:
case 3094:
case 3725:
case 1389:
case 3489:
case 2990:
case 146:
case 1774:
case 919:
case 1459:
case 3359:
case 1764:
case 3004:
case 3189:
case 3027:
case 968:
case 2900:
case 2590:
case 2742:
case 1982:
case 1188:
case 1375:
case 3465:
case 3397:
case 555:
case 4047:
case 3521:
case 2372:
case 201:
case 3444:
case 1344:
case 2206:
case 446:
case 904:
case 2579:
case 3533:
case 3670:
case 3660:
case 2569:
case 2781:
case 1941:
case 2946:
case 1786:
case 2296:
case 417:
case 416:
case 2979:
case 1201:
case 3933:
case 865:
case 621:
case 1541:
case 2840:
case 1687:
case 1407:
case 595:
case 1424:
case 1197:
case 2831:
case 3921:
case 3715:
case 2646:
case 3284:
case 1973:
case 1963:
case 2679:
case 3570:
case 230:
case 4081:
case 78:
case 2669:
case 3022:
case 2747:
case 801:
case 565:
case 3557:
case 2132:
case 2938:
case 707:
case 3828:
case 2045:
case 3866:
case 3957:
case 2538:
case 2074:
case 3017:
case 2064:
case 239:
case 3960:
case 3423:
case 2716:
case 3798:
case 2289:
case 1934:
case 3431:
case 3664:
case 2033:
case 2875:
case 3079:
case 3069:
case 2865:
case 2622:
case 2336:
case 1534:
case 108:
case 975:
case 1872:
case 3046:
case 1625:
case 3140:
case 4093:
case 2844:
case 2258:
case 670:
case 351:
case 1711:
case 3708:
case 2128:
case 2449:
case 3280:
case 2922:
case 420:
case 2466:
case 1171:
case 2517:
case 3574:
case 3564:
case 2476:
case 987:
case 603:
case 2348:
case 986:
case 3205:
case 2057:
case 2329:
case 361:
case 180:
case 1277:
case 1267:
case 3945:
case 2070:
case 3371:
case 1461:
case 2176:
case 1634:
case 3361:
case 3964:
case 2917:
case 3974:
case 1283:
case 2149:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747710001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,];
var gg_b = "1747710001/";

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
