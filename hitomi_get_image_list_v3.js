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
case 96:
case 1020:
case 3467:
case 443:
case 1946:
case 1235:
case 1250:
case 1400:
case 19:
case 2366:
case 2420:
case 3633:
case 3557:
case 2498:
case 3302:
case 2182:
case 804:
case 3414:
case 2478:
case 3269:
case 1480:
case 1617:
case 3278:
case 3298:
case 2352:
case 3166:
case 3589:
case 367:
case 589:
case 354:
case 2507:
case 2875:
case 2080:
case 1527:
case 1069:
case 2559:
case 2102:
case 1122:
case 731:
case 4031:
case 1664:
case 2267:
case 3715:
case 200:
case 3047:
case 3883:
case 102:
case 776:
case 242:
case 3451:
case 1339:
case 2481:
case 3902:
case 3561:
case 846:
case 3896:
case 3281:
case 2049:
case 148:
case 516:
case 1449:
case 3540:
case 3113:
case 55:
case 3670:
case 3982:
case 1247:
case 2574:
case 2401:
case 2594:
case 322:
case 494:
case 1796:
case 1162:
case 1930:
case 1955:
case 2227:
case 1624:
case 2441:
case 3500:
case 1259:
case 3087:
case 988:
case 3843:
case 2009:
case 3131:
case 1567:
case 2684:
case 553:
case 1156:
case 2535:
case 2331:
case 1393:
case 3427:
case 3580:
case 1306:
case 980:
case 3007:
case 4013:
case 963:
case 1872:
case 1461:
case 1892:
case 326:
case 44:
case 3668:
case 1294:
case 1551:
case 2677:
case 512:
case 1815:
case 2125:
case 637:
case 1105:
case 3611:
case 3536:
case 3094:
case 2738:
case 800:
case 3342:
case 3521:
case 2931:
case 2834:
case 3549:
case 1185:
case 477:
case 2040:
case 772:
case 1906:
case 2926:
case 358:
case 479:
case 3333:
case 1751:
case 2243:
case 2860:
case 925:
case 940:
case 217:
case 93:
case 1889:
case 219:
case 1958:
case 902:
case 658:
case 2666:
case 184:
case 1857:
case 1191:
case 457:
case 1171:
case 459:
case 650:
case 1317:
case 3736:
case 3990:
case 337:
case 2829:
case 1108:
case 3700:
case 3144:
case 1263:
case 1034:
case 1596:
case 286:
case 1576:
case 1840:
case 1503:
case 16:
case 3234:
case 2072:
case 1861:
case 1472:
case 3832:
case 1583:
case 1415:
case 724:
case 421:
case 397:
case 2015:
case 3370:
case 2735:
case 2750:
case 1686:
case 547:
case 745:
case 2154:
case 2869:
case 3761:
case 1012:
case 3184:
case 163:
case 2516:
case 3979:
case 1673:
case 1110:
case 2820:
case 3212:
case 2794:
case 3999:
case 483:
case 3867:
case 906:
case 819:
case 3814:
case 3104:
case 817:
case 3295:
case 57:
case 1148:
case 2397:
case 3253:
case 2377:
case 3757:
case 2179:
case 669:
case 2199:
case 3023:
case 3476:
case 933:
case 2787:
case 460:
case 1655:
case 1630:
case 2111:
case 1924:
case 1821:
case 3709:
case 180:
case 3851:
case 3379:
case 111:
case 3399:
case 4044:
case 3197:
case 2563:
case 3515:
case 3483:
case 3592:
case 2296:
case 1053:
case 2984:
case 2168:
case 3572:
case 2453:
case 374:
case 2203:
case 1223:
case 3097:
case 1632:
case 3077:
case 698:
case 2323:
case 2837:
case 1786:
case 3661:
case 2068:
case 1153:
case 2079:
case 1865:
case 2938:
case 3123:
case 38:
case 1479:
case 1793:
case 2544:
case 1277:
case 1773:
case 4063:
case 3528:
case 321:
case 916:
case 470:
case 1976:
case 2687:
case 95:
case 1996:
case 2923:
case 638:
case 1755:
case 3657:
case 1048:
case 677:
case 809:
case 807:
case 3004:
case 1195:
case 1983:
case 3689:
case 2054:
case 64:
case 3248:
case 1517:
case 2338:
case 584:
case 2224:
case 359:
case 2845:
case 357:
case 2607:
case 1204:
case 615:
case 4016:
case 70:
case 3210:
case 2822:
case 732:
case 1112:
case 1088:
case 953:
case 2172:
case 2766:
case 2488:
case 1244:
case 2115:
case 2647:
case 1651:
case 3163:
case 2597:
case 580:
case 1428:
case 643:
case 3855:
case 1008:
case 265:
case 2028:
case 771:
case 3579:
case 703:
case 3782:
case 368:
case 1134:
case 588:
case 2363:
case 2885:
case 1746:
case 2033:
case 1433:
case 2504:
case 736:
case 3600:
case 1667:
case 694:
case 3806:
case 2419:
case 3972:
case 3992:
case 2856:
case 563:
case 2650:
case 383:
case 3886:
case 149:
case 147:
case 2316:
case 3554:
case 207:
case 3915:
case 3680:
case 3417:
case 3957:
case 3205:
case 3430:
case 4047:
case 2808:
case 683:
case 810:
case 548:
case 1546:
case 2140:
case 1676:
case 2485:
case 2513:
case 1696:
case 1332:
case 1890:
case 1603:
case 3909:
case 835:
case 116:
case 1724:
case 818:
case 2042:
case 3318:
case 502:
case 3989:
case 2784:
case 1005:
case 3858:
case 729:
case 2405:
case 1927:
case 3340:
case 540:
case 525:
case 2907:
case 3357:
case 1231:
case 343:
case 1056:
case 2797:
case 3961:
case 3502:
case 3817:
case 901:
case 3107:
case 214:
case 2387:
case 2566:
case 3309:
case 3486:
case 3262:
case 668:
case 189:
case 2891:
case 2462:
case 751:
case 3582:
case 1833:
case 2974:
case 1141:
case 467:
case 1129:
case 3940:
case 3493:
case 4050:
case 2307:
case 3473:
case 4035:
case 3026:
case 426:
case 1351:
case 1879:
case 330:
case 2347:
case 3013:
case 3900:
case 2149:
case 1465:
case 659:
case 1914:
case 2121:
case 450:
case 3439:
case 1530:
case 4074:
case 3525:
case 2239:
case 4094:
case 338:
case 947:
case 3147:
case 3615:
case 1764:
case 281:
case 2663:
case 112:
case 1037:
case 3672:
case 3692:
case 2246:
case 1213:
case 3336:
case 458:
case 3321:
case 235:
case 2947:
case 1951:
case 544:
case 1586:
case 1169:
case 2180:
case 2445:
case 68:
case 3135:
case 3150:
case 1314:
case 1252:
case 823:
case 4059:
case 2531:
case 3949:
case 1643:
case 1120:
case 2526:
case 3222:
case 814:
case 3936:
case 2335:
case 4007:
case 3824:
case 1266:
case 295:
case 3790:
case 3475:
case 961:
case 3495:
case 3154:
case 1310:
case 2761:
case 191:
case 1656:
case 839:
case 1850:
case 2968:
case 3304:
case 2184:
case 2354:
case 2979:
case 870:
case 3794:
case 1438:
case 2867:
case 642:
case 3626:
case 2911:
case 2814:
case 3878:
case 2104:
case 409:
case 2295:
case 1662:
case 702:
case 407:
case 1423:
case 3397:
case 2253:
case 1910:
case 3199:
case 131:
case 2023:
case 3787:
case 924:
case 3283:
case 3111:
case 899:
case 3801:
case 2709:
case 2625:
case 1847:
case 2379:
case 2851:
case 1083:
case 2399:
case 382:
case 1605:
case 4028:
case 3563:
case 465:
case 2177:
case 551:
case 2311:
case 2789:
case 3296:
case 3881:
case 3984:
case 3168:
case 1760:
case 4070:
case 3453:
case 1391:
case 172:
case 928:
case 2602:
case 317:
case 1319:
case 319:
case 1645:
case 3666:
case 1807:
case 1595:
case 2749:
case 3944:
case 3841:
case 1908:
case 278:
case 3133:
case 2736:
case 793:
case 1043:
case 2990:
case 237:
case 375:
case 91:
case 2970:
case 1894:
case 441:
case 3128:
case 2933:
case 1874:
case 566:
case 3190:
case 2665:
case 1798:
case 3170:
case 1778:
case 604:
case 3434:
case 1553:
case 3344:
case 1308:
case 1463:
case 733:
case 2832:
case 2390:
case 1158:
case 2370:
case 3735:
case 299:
case 2260:
case 3057:
case 1289:
case 1356:
case 1578:
case 3227:
case 867:
case 3429:
case 1520:
case 2843:
case 1487:
case 1610:
case 2131:
case 4002:
case 1985:
case 2059:
case 113:
case 1209:
case 3550:
case 2654:
case 1257:
case 3331:
case 686:
case 592:
case 1753:
case 3:
case 1905:
case 4082:
case 2427:
case 2580:
case 1186:
case 3326:
case 2007:
case 304:
case 1240:
case 1775:
case 1795:
case 2668:
case 3142:
case 3697:
case 1712:
case 3547:
case 1218:
case 1032:
case 3677:
case 2536:
case 1155:
case 2342:
case 784:
case 1474:
case 1962:
case 976:
case 1494:
case 532:
case 3931:
case 2679:
case 2549:
case 1305:
case 2699:
case 3040:
case 42:
case 258:
case 596:
case 2965:
case 2467:
case 1838:
case 3000:
case 1619:
case 3913:
case 1529:
case 2152:
case 1691:
case 1014:
case 1541:
case 1734:
case 2633:
case 2557:
case 780:
case 1322:
case 2414:
case 2278:
case 2772:
case 2298:
case 3352:
case 254:
case 3875:
case 3080:
case 3102:
case 423:
case 3763:
case 2035:
case 2715:
case 2047:
case 3313:
case 342:
case 1945:
case 3966:
case 1447:
case 2451:
case 2201:
case 3481:
case 2902:
case 1922:
case 156:
case 2896:
case 2281:
case 11:
case 763:
case 3049:
case 3165:
case 2690:
case 308:
case 1146:
case 2670:
case 850:
case 3644:
case 3574:
case 3251:
case 3716:
case 3036:
case 1608:
case 3021:
case 205:
case 1634:
case 2237:
case 230:
case 3065:
case 1046:
case 132:
case 2446:
case 1413:
case 3149:
case 1998:
case 2439:
case 894:
case 3136:
case 1897:
case 4018:
case 2525:
case 1877:
case 552:
case 2147:
case 2980:
case 381:
case 455:
case 2542:
case 2672:
case 1265:
case 2321:
case 3935:
case 32:
case 335:
case 1320:
case 2300:
case 192:
case 2135:
case 1556:
case 1884:
case 1167:
case 843:
case 3744:
case 2728:
case 1202:
case 1452:
case 1369:
case 3100:
case 2380:
case 3082:
case 4:
case 2936:
case 1562:
case 524:
case 404:
case 2770:
case 2245:
case 1114:
case 395:
case 1804:
case 1844:
case 1941:
case 1225:
case 2455:
case 2205:
case 400:
case 545:
case 1055:
case 749:
case 2194:
case 747:
case 442:
case 1710:
case 3140:
case 1242:
case 3987:
case 2565:
case 2909:
case 1929:
case 3623:
case 879:
case 3888:
case 3394:
case 2754:
case 84:
case 1653:
case 3374:
case 1537:
case 3025:
case 2989:
case 136:
case 3230:
case 3405:
case 3255:
case 2340:
case 294:
case 3907:
case 2357:
case 4000:
case 1341:
case 1612:
case 2961:
case 3206:
case 1522:
case 2817:
case 3387:
case 3566:
case 1675:
case 2262:
case 2486:
case 1545:
case 2918:
case 2582:
case 3974:
case 3871:
case 3157:
case 4080:
case 2031:
case 1073:
case 2389:
case 3109:
case 1360:
case 1426:
case 3819:
case 2256:
case 1093:
case 196:
case 2711:
case 2940:
case 966:
case 2473:
case 3307:
case 2187:
case 2026:
case 1681:
case 88:
case 3172:
case 3766:
case 3647:
case 3115:
case 260:
case 3577:
case 162:
case 1058:
case 2208:
case 2458:
case 821:
case 151:
case 2702:
case 0:
case 1228:
case 2830:
case 2621:
case 3028:
case 2288:
case 614:
case 2599:
case 2579:
case 2649:
case 2315:
case 268:
case 531:
case 3885:
case 3217:
case 1548:
case 1678:
case 127:
case 857:
case 3504:
case 3471:
case 3491:
case 2873:
case 1620:
case 2600:
case 932:
case 2806:
case 1143:
case 2116:
case 1826:
case 75:
case 3584:
case 283:
case 2291:
case 2554:
case 3316:
case 1233:
case 1737:
case 591:
case 307:
case 2417:
case 2680:
case 1669:
case 2097:
case 2077:
case 1183:
case 1477:
case 1279:
case 3837:
case 903:
case 971:
case 1912:
case 1299:
case 3068:
case 3079:
case 1103:
case 753:
case 3938:
case 1813:
case 2640:
case 1176:
case 996:
case 1762:
case 1268:
case 2590:
case 3011:
case 3694:
case 860:
case 3544:
case 3674:
case 4015:
case 1519:
case 3687:
case 3410:
case 681:
case 883:
case 610:
case 1375:
case 419:
case 2533:
case 2657:
case 1312:
case 62:
case 1785:
case 1024:
case 2004:
case 2689:
case 2742:
case 3054:
case 3338:
case 3845:
case 1866:
case 257:
case 264:
case 3607:
case 1705:
case 1953:
case 2210:
case 3279:
case 1837:
case 3588:
case 2786:
case 1068:
case 3211:
case 2376:
case 2558:
case 141:
case 3183:
case 3477:
case 3975:
case 1323:
case 2297:
case 1011:
case 1544:
case 1731:
case 2411:
case 3508:
case 586:
case 1079:
case 923:
case 2865:
case 1938:
case 1099:
case 2499:
case 3641:
case 3254:
case 3591:
case 2048:
case 849:
case 1448:
case 3785:
case 779:
case 2996:
case 472:
case 2284:
case 777:
case 3852:
case 3395:
case 3629:
case 2730:
case 2755:
case 3705:
case 3953:
case 3484:
case 2564:
case 3660:
case 632:
case 1054:
case 519:
case 2983:
case 2517:
case 1338:
case 2175:
case 1845:
case 2204:
case 87:
case 715:
case 2825:
case 3334:
case 582:
case 1597:
case 362:
case 1805:
case 3722:
case 485:
case 2088:
case 734:
case 2842:
case 3290:
case 431:
case 3745:
case 4003:
case 3270:
case 2470:
case 1916:
case 2943:
case 2134:
case 1885:
case 1070:
case 1752:
case 2428:
case 4083:
case 671:
case 873:
case 3444:
case 1028:
case 3601:
case 3831:
case 636:
case 2019:
case 1419:
case 3143:
case 3510:
case 1217:
case 3548:
case 2091:
case 3678:
case 3698:
case 794:
case 1504:
case 1471:
case 2433:
case 3017:
case 981:
case 2343:
case 247:
case 910:
case 476:
case 3737:
case 1316:
case 3233:
case 3669:
case 1963:
case 92:
case 2546:
case 1140:
case 1987:
case 25:
case 2603:
case 1704:
case 3929:
case 216:
case 1623:
case 2085:
case 3225:
case 2539:
case 812:
case 2828:
case 3710:
case 2683:
case 500:
case 1230:
case 1405:
case 1255:
case 2927:
case 2425:
case 3132:
case 542:
case 1888:
case 41:
case 1394:
case 1959:
case 3537:
case 456:
case 627:
case 3127:
case 114:
case 2932:
case 1387:
case 4014:
case 1566:
case 287:
case 3695:
case 941:
case 3329:
case 289:
case 1273:
case 2231:
case 3341:
case 3612:
case 1293:
case 2056:
case 371:
case 1206:
case 1456:
case 2226:
case 303:
case 3073:
case 3426:
case 1638:
case 1819:
case 3093:
case 3431:
case 651:
case 1286:
case 1891:
case 2833:
case 1359:
case 1157:
case 2141:
case 2062:
case 2914:
case 3978:
case 757:
case 3039:
case 555:
case 3771:
case 1347:
case 1065:
case 3046:
case 3791:
case 3413:
case 3585:
case 546:
case 30:
case 2465:
case 1246:
case 816:
case 1950:
case 12:
case 2868:
case 3301:
case 3505:
case 3897:
case 1239:
case 3151:
case 212:
case 3969:
case 2764:
case 181:
case 1422:
case 78:
case 3884:
case 2252:
case 253:
case 1002:
case 3320:
case 2951:
case 5:
case 666:
case 1180:
case 424:
case 504:
case 2367:
case 965:
case 1350:
case 1335:
case 2178:
case 887:
case 3901:
case 2198:
case 2593:
case 2573:
case 1531:
case 2643:
case 3452:
case 3708:
case 3369:
case 2506:
case 3014:
case 2078:
case 2098:
case 2939:
case 3671:
case 1498:
case 1478:
case 1587:
case 774:
case 2946:
case 3067:
case 2235:
case 29:
case 1420:
case 471:
case 1366:
case 3937:
case 2122:
case 3435:
case 4073:
case 685:
case 4006:
case 2145:
case 2617:
case 2480:
case 1469:
case 514:
case 1875:
case 2527:
case 3688:
case 676:
case 2081:
case 1853:
case 3249:
case 2137:
case 202:
case 3236:
case 2658:
case 142:
case 919:
case 1966:
case 225:
case 23:
case 4030:
case 1644:
case 2743:
case 345:
case 320:
case 1716:
case 1401:
case 3337:
case 1036:
case 1594:
case 2436:
case 1021:
case 3608:
case 2001:
case 248:
case 108:
case 2449:
case 893:
case 3823:
case 2259:
case 2409:
case 3520:
case 3487:
case 1009:
case 3173:
case 3985:
case 3289:
case 492:
case 2776:
case 2162:
case 3578:
case 799:
case 2930:
case 1723:
case 595:
case 233:
case 1604:
case 2207:
case 2060:
case 1089:
case 244:
case 3753:
case 2393:
case 2306:
case 3186:
case 1326:
case 1460:
case 104:
case 1684:
case 3209:
case 3459:
case 1550:
case 3362:
case 1535:
case 352:
case 2986:
case 1547:
case 1677:
case 2274:
case 2551:
case 581:
case 1125:
case 2815:
case 510:
case 3385:
case 361:
case 3863:
case 2105:
case 432:
case 4046:
case 2872:
case 848:
case 535:
case 3775:
case 52:
case 40:
case 3795:
case 293:
case 1834:
case 2973:
case 2185:
case 2440:
case 2993:
case 206:
case 518:
case 3261:
case 146:
case 802:
case 1232:
case 1018:
case 672:
case 83:
case 3501:
case 3962:
case 1860:
case 2889:
case 117:
case 3319:
case 942:
case 3117:
case 3512:
case 2216:
case 3859:
case 1747:
case 2317:
case 3887:
case 652:
case 908:
case 1652:
case 3416:
case 175:
case 1829:
case 726:
case 1841:
case 2191:
case 1133:
case 3798:
case 1190:
case 3292:
case 3778:
case 2358:
case 2646:
case 186:
case 1523:
case 26:
case 3388:
case 1128:
case 3720:
case 2818:
case 3971:
case 2639:
case 541:
case 2415:
case 3158:
case 3553:
case 1072:
case 3769:
case 2964:
case 2861:
case 624:
case 2732:
case 645:
case 620:
case 3348:
case 263:
case 2686:
case 1154:
case 3310:
case 2075:
case 391:
case 507:
case 3124:
case 955:
case 1384:
case 884:
case 3662:
case 2673:
case 1631:
case 1516:
case 2543:
case 946:
case 1794:
case 1626:
case 767:
case 4058:
case 1283:
case 1787:
case 3948:
case 2836:
case 2630:
case 2821:
case 3729:
case 451:
case 385:
case 1801:
case 3423:
case 1377:
case 2849:
case 3910:
case 331:
case 3685:
case 1276:
case 1296:
case 1707:
case 1453:
case 3847:
case 280:
case 3083:
case 182:
case 3605:
case 3811:
case 2998:
case 3101:
case 2381:
case 2039:
case 1439:
case 3351:
case 2634:
case 2920:
case 2046:
case 1900:
case 232:
case 3899:
case 3967:
case 1446:
case 493:
case 2585:
case 2413:
case 20:
case 526:
case 1542:
case 3037:
case 1336:
case 3868:
case 177:
case 3181:
case 2505:
case 2897:
case 1349:
case 138:
case 2151:
case 1615:
case 312:
case 3758:
case 1150:
case 896:
case 2981:
case 3252:
case 2398:
case 4029:
case 3022:
case 2320:
case 2466:
case 3951:
case 3586:
case 292:
case 1300:
case 4041:
case 2788:
case 3045:
case 433:
case 444:
case 4060:
case 1770:
case 2562:
case 1921:
case 741:
case 3593:
case 2167:
case 3573:
case 968:
case 1052:
case 3643:
case 3120:
case 1728:
case 803:
case 2452:
case 601:
case 673:
case 2369:
case 3506:
case 647:
case 3696:
case 2242:
case 3332:
case 649:
case 1909:
case 316:
case 3870:
case 707:
case 402:
case 3539:
case 522:
case 1205:
case 709:
case 43:
case 2055:
case 1194:
case 505:
case 425:
case 3828:
case 957:
case 964:
case 3683:
case 236:
case 3005:
case 959:
case 1858:
case 1340:
case 3425:
case 2132:
case 2537:
case 1318:
case 1285:
case 2127:
case 1817:
case 765:
case 3932:
case 387:
case 569:
case 1309:
case 1486:
case 2675:
case 2329:
case 567:
case 2545:
case 1357:
case 143:
case 4020:
case 3056:
case 1961:
case 2522:
case 203:
case 1502:
case 98:
case 1389:
case 296:
case 1711:
case 2093:
case 1256:
case 3327:
case 134:
case 1026:
case 1187:
case 1799:
case 1582:
case 1779:
case 3833:
case 3062:
case 160:
case 3244:
case 3651:
case 262:
case 1163:
case 1208:
case 990:
case 3088:
case 866:
case 2681:
case 488:
case 2745:
case 574:
case 2270:
case 1288:
case 4053:
case 1579:
case 1782:
case 168:
case 1044:
case 3428:
case 411:
case 1636:
case 1392:
case 480:
case 1855:
case 1830:
case 3008:
case 1621:
case 714:
case 3739:
case 2831:
case 2934:
case 1873:
case 4012:
case 2620:
case 1600:
case 3019:
case 3667:
case 463:
case 2143:
case 94:
case 3614:
case 2548:
case 3746:
case 2698:
case 915:
case 4075:
case 938:
case 2737:
case 1554:
case 1915:
case 1680:
case 2669:
case 1972:
case 1464:
case 1992:
case 2064:
case 3468:
case 2279:
case 2912:
case 2588:
case 3786:
case 943:
case 3376:
case 795:
case 3632:
case 373:
case 2183:
case 2995:
case 2477:
case 3793:
case 1618:
case 1839:
case 1528:
case 653:
case 934:
case 2103:
case 3865:
case 1846:
case 2813:
case 1570:
case 2762:
case 1590:
case 2268:
case 3479:
case 2196:
case 2641:
case 3882:
case 1533:
case 2571:
case 3048:
case 1424:
case 781:
case 484:
case 2785:
case 578:
case 2024:
case 2519:
case 3976:
case 72:
case 2852:
case 735:
case 539:
case 2629:
case 3730:
case 2375:
case 570:
case 2705:
case 2953:
case 1084:
case 2484:
case 3802:
case 3195:
case 1742:
case 3983:
case 1689:
case 1248:
case 827:
case 2866:
case 3204:
case 164:
case 708:
case 3732:
case 3012:
case 3238:
case 2348:
case 2656:
case 3324:
case 926:
case 2835:
case 2850:
case 363:
case 4091:
case 2310:
case 3880:
case 47:
case 3075:
case 291:
case 1761:
case 1911:
case 742:
case 276:
case 449:
case 1295:
case 1275:
case 602:
case 1979:
case 1354:
case 3673:
case 958:
case 1038:
case 872:
case 3800:
case 2438:
case 625:
case 3836:
case 2948:
case 3655:
case 3924:
case 3821:
case 2729:
case 1709:
case 1368:
case 2423:
case 2076:
case 1757:
case 1253:
case 4088:
case 2741:
case 2910:
case 1496:
case 2003:
case 1476:
case 3053:
case 1572:
case 174:
case 1625:
case 380:
case 1851:
case 2605:
case 311:
case 560:
case 69:
case 1197:
case 1177:
case 1483:
case 1515:
case 4048:
case 2781:
case 564:
case 1827:
case 557:
case 2645:
case 2117:
case 559:
case 2807:
case 746:
case 272:
case 3216:
case 1333:
case 2371:
case 1736:
case 3317:
case 1016:
case 2043:
case 2701:
case 3809:
case 137:
case 1721:
case 3119:
case 1970:
case 905:
case 1682:
case 922:
case 3364:
case 2908:
case 3191:
case 178:
case 3171:
case 3034:
case 2798:
case 1665:
case 644:
case 2919:
case 58:
case 3503:
case 36:
case 2894:
case 2991:
case 2720:
case 2874:
case 1933:
case 521:
case 1144:
case 7:
case 473:
case 2463:
case 967:
case 3583:
case 3415:
case 1370:
case 2158:
case 1063:
case 2637:
case 3492:
case 2769:
case 3964:
case 2308:
case 1328:
case 2106:
case 3386:
case 1500:
case 1087:
case 1126:
case 3409:
case 3259:
case 4022:
case 1131:
case 2173:
case 3567:
case 598:
case 2985:
case 2598:
case 3041:
case 3776:
case 3514:
case 3162:
case 3930:
case 3955:
case 4045:
case 333:
case 224:
case 3703:
case 3207:
case 1241:
case 344:
case 3373:
case 2905:
case 3393:
case 1427:
case 590:
case 66:
case 2186:
case 2569:
case 3489:
case 1007:
case 3287:
case 1059:
case 213:
case 3783:
case 2459:
case 2209:
case 1229:
case 3156:
case 2362:
case 2712:
case 2218:
case 3551:
case 1432:
case 261:
case 3105:
case 2863:
case 2581:
case 3872:
case 3892:
case 856:
case 2240:
case 2775:
case 3355:
case 393:
case 579:
case 3973:
case 1325:
case 3440:
case 3185:
case 530:
case 1699:
case 54:
case 2305:
case 4037:
case 306:
case 828:
case 158:
case 1611:
case 515:
case 2155:
case 1342:
case 412:
case 2501:
case 719:
case 1521:
case 2014:
case 3078:
case 3098:
case 2541:
case 1633:
case 3939:
case 2734:
case 1302:
case 489:
case 2280:
case 1269:
case 611:
case 4056:
case 3020:
case 1965:
case 3946:
case 2529:
case 2067:
case 3235:
case 3400:
case 39:
case 1509:
case 1382:
case 543:
case 2435:
case 2200:
case 3664:
case 1035:
case 1715:
case 1278:
case 1792:
case 2560:
case 1298:
case 997:
case 154:
case 169:
case 3527:
case 3069:
case 3339:
case 228:
case 1902:
case 970:
case 45:
case 2922:
case 3532:
case 1883:
case 2236:
case 1451:
case 33:
case 1518:
case 245:
case 2337:
case 852:
case 3421:
case 2608:
case 3001:
case 1628:
case 939:
case 1876:
case 21:
case 1690:
case 1803:
case 3449:
case 1540:
case 1113:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745834401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,];
var gg_b = "1745834401/";

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
