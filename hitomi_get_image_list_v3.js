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
case 3753:
case 3251:
case 3633:
case 660:
case 1482:
case 3988:
case 3903:
case 1618:
case 3642:
case 300:
case 330:
case 2219:
case 1390:
case 1090:
case 2556:
case 892:
case 1288:
case 1525:
case 503:
case 707:
case 533:
case 1951:
case 3142:
case 3554:
case 1118:
case 3772:
case 353:
case 1766:
case 1629:
case 2585:
case 817:
case 1075:
case 752:
case 874:
case 1232:
case 2693:
case 2376:
case 488:
case 1243:
case 3217:
case 3960:
case 451:
case 1917:
case 3524:
case 664:
case 1739:
case 334:
case 2830:
case 3316:
case 2526:
case 3016:
case 554:
case 1555:
case 2277:
case 942:
case 4069:
case 259:
case 1921:
case 3221:
case 3102:
case 677:
case 3723:
case 2862:
case 3187:
case 3374:
case 726:
case 388:
case 2568:
case 202:
case 1894:
case 434:
case 404:
case 2396:
case 2096:
case 2760:
case 1265:
case 531:
case 912:
case 679:
case 3546:
case 3781:
case 3394:
case 3094:
case 83:
case 2732:
case 2297:
case 1908:
case 2173:
case 3402:
case 4074:
case 257:
case 108:
case 138:
case 644:
case 691:
case 3613:
case 3965:
case 739:
case 1429:
case 1107:
case 1182:
case 1070:
case 400:
case 2504:
case 3895:
case 915:
case 3036:
case 2810:
case 1948:
case 1719:
case 1418:
case 205:
case 1836:
case 1520:
case 2034:
case 819:
case 3264:
case 3792:
case 2367:
case 2067:
case 965:
case 3248:
case 3870:
case 637:
case 607:
case 2513:
case 3323:
case 3023:
case 3552:
case 1509:
case 367:
case 122:
case 3716:
case 4081:
case 760:
case 3839:
case 800:
case 562:
case 597:
case 793:
case 652:
case 2065:
case 447:
case 3573:
case 317:
case 1039:
case 374:
case 2994:
case 710:
case 3426:
case 1823:
case 1341:
case 228:
case 901:
case 349:
case 1935:
case 853:
case 1853:
case 3456:
case 1775:
case 1598:
case 764:
case 804:
case 1549:
case 3072:
case 1066:
case 125:
case 3210:
case 1001:
case 2106:
case 1234:
case 1645:
case 1872:
case 1267:
case 3053:
case 3353:
case 1440:
case 3934:
case 395:
case 3680:
case 2312:
case 2012:
case 3828:
case 545:
case 1445:
case 851:
case 3156:
case 2879:
case 55:
case 18:
case 1319:
case 1019:
case 1795:
case 3480:
case 61:
case 2303:
case 2734:
case 3404:
case 791:
case 1163:
case 586:
case 2406:
case 2851:
case 1892:
case 1328:
case 66:
case 2533:
case 470:
case 1770:
case 495:
case 213:
case 2332:
case 294:
case 2032:
case 2124:
case 1276:
case 599:
case 1684:
case 1058:
case 241:
case 1358:
case 4023:
case 2821:
case 2043:
case 1527:
case 1930:
case 369:
case 2060:
case 3230:
case 571:
case 639:
case 3626:
case 3794:
case 1962:
case 417:
case 2502:
case 347:
case 2587:
case 1881:
case 2796:
case 740:
case 954:
case 1511:
case 542:
case 3858:
case 2817:
case 3012:
case 2522:
case 3312:
case 295:
case 1995:
case 1348:
case 859:
case 2604:
case 1337:
case 2934:
case 2053:
case 3661:
case 1099:
case 2210:
case 1715:
case 1364:
case 1064:
case 3106:
case 3295:
case 3864:
case 4003:
case 1507:
case 475:
case 1970:
case 490:
case 2180:
case 1582:
case 1425:
case 3270:
case 3936:
case 94:
case 2456:
case 952:
case 544:
case 591:
case 89:
case 2668:
case 1762:
case 786:
case 3969:
case 361:
case 1294:
case 1083:
case 1308:
case 274:
case 1383:
case 3065:
case 1730:
case 631:
case 217:
case 1650:
case 907:
case 745:
case 1486:
case 3883:
case 1865:
case 4060:
case 2552:
case 2841:
case 3513:
case 2897:
case 494:
case 514:
case 1155:
case 219:
case 3446:
case 1843:
case 2858:
case 773:
case 577:
case 835:
case 1274:
case 3624:
case 3974:
case 461:
case 3502:
case 372:
case 1860:
case 1216:
case 2626:
case 715:
case 2468:
case 2081:
case 2381:
case 1735:
case 3360:
case 269:
case 1655:
case 564:
case 3343:
case 1017:
case 3043:
case 2444:
case 2262:
case 411:
case 394:
case 909:
case 341:
case 3275:
case 1420:
case 443:
case 650:
case 20:
case 3154:
case 2656:
case 3406:
case 2736:
case 2185:
case 1975:
case 3003:
case 2215:
case 3388:
case 633:
case 603:
case 3461:
case 3290:
case 1529:
case 363:
case 2685:
case 120:
case 3767:
case 91:
case 1351:
case 2392:
case 3879:
case 560:
case 802:
case 762:
case 593:
case 1584:
case 1876:
case 3473:
case 1500:
case 2221:
case 359:
case 914:
case 1814:
case 1111:
case 2316:
case 1127:
case 1409:
case 539:
case 2602:
case 1281:
case 204:
case 234:
case 1783:
case 3765:
case 432:
case 671:
case 1330:
case 2524:
case 2943:
case 964:
case 3981:
case 1362:
case 3376:
case 3076:
case 1563:
case 861:
case 116:
case 910:
case 3228:
case 3422:
case 828:
case 1928:
case 253:
case 3815:
case 2142:
case 405:
case 1540:
case 2554:
case 1015:
case 1799:
case 166:
case 3556:
case 3712:
case 1449:
case 200:
case 2875:
case 2642:
case 2251:
case 1292:
case 3689:
case 1657:
case 2988:
case 2870:
case 2506:
case 940:
case 1253:
case 3367:
case 1631:
case 673:
case 2299:
case 1310:
case 3788:
case 3703:
case 2264:
case 305:
case 1649:
case 335:
case 1131:
case 1272:
case 1198:
case 2336:
case 1545:
case 2895:
case 841:
case 3504:
case 1779:
case 1966:
case 1478:
case 3580:
case 1717:
case 2613:
case 2402:
case 3173:
case 3297:
case 2487:
case 1939:
case 3652:
case 2369:
case 2069:
case 459:
case 3493:
case 1997:
case 2094:
case 813:
case 2546:
case 182:
case 1035:
case 1335:
case 1411:
case 1941:
case 3152:
case 662:
case 3396:
case 4014:
case 2113:
case 251:
case 3835:
case 3568:
case 288:
case 507:
case 4076:
case 863:
case 875:
case 1924:
case 1674:
case 1286:
case 1543:
case 3517:
case 2027:
case 2130:
case 1616:
case 3371:
case 3802:
case 3986:
case 1859:
case 2577:
case 2750:
case 348:
case 418:
case 2900:
case 2630:
case 1744:
case 1002:
case 3359:
case 164:
case 1174:
case 2226:
case 1469:
case 1768:
case 2662:
case 1494:
case 2435:
case 2011:
case 2311:
case 3521:
case 680:
case 3833:
case 3190:
case 3842:
case 3675:
case 916:
case 4007:
case 323:
case 236:
case 3745:
case 1829:
case 2615:
case 722:
case 1033:
case 1954:
case 2940:
case 3495:
case 3018:
case 2285:
case 2528:
case 889:
case 3763:
case 2415:
case 2031:
case 2822:
case 2204:
case 2280:
case 1785:
case 2349:
case 3170:
case 2049:
case 3695:
case 140:
case 2566:
case 3307:
case 3007:
case 946:
case 2610:
case 423:
case 3599:
case 1220:
case 1906:
case 1882:
case 1512:
case 2110:
case 985:
case 3537:
case 4018:
case 3670:
case 2309:
case 3091:
case 3391:
case 3038:
case 982:
case 608:
case 2268:
case 3047:
case 1013:
case 3700:
case 2430:
case 368:
case 3950:
case 1694:
case 4071:
case 1726:
case 321:
case 448:
case 3508:
case 1565:
case 1474:
case 4059:
case 1169:
case 2597:
case 1946:
case 227:
case 2806:
case 1231:
case 2982:
case 3166:
case 2637:
case 1653:
case 2648:
case 784:
case 1080:
case 1380:
case 3718:
case 1249:
case 3998:
case 3045:
case 625:
case 1492:
case 2664:
case 3601:
case 2020:
case 2320:
case 3510:
case 2148:
case 2479:
case 1153:
case 2595:
case 2137:
case 3666:
case 1845:
case 1672:
case 2778:
case 848:
case 3101:
case 2861:
case 3880:
case 1209:
case 3697:
case 1368:
case 1068:
case 1481:
case 3305:
case 2417:
case 2350:
case 2846:
case 2050:
case 2947:
case 489:
case 1596:
case 1344:
case 1044:
case 3759:
case 2683:
case 2608:
case 3458:
case 1787:
case 582:
case 3639:
case 1952:
case 2991:
case 780:
case 3141:
case 3771:
case 3535:
case 2421:
case 3139:
case 3477:
case 1623:
case 1973:
case 4084:
case 823:
case 4000:
case 2971:
case 1181:
case 1884:
case 3562:
case 1800:
case 1576:
case 4005:
case 1423:
case 3826:
case 3530:
case 3677:
case 3927:
case 2355:
case 3911:
case 139:
case 2824:
case 3497:
case 2202:
case 1026:
case 1326:
case 3384:
case 3791:
case 678:
case 3738:
case 2483:
case 924:
case 1713:
case 2617:
case 1472:
case 3978:
case 2929:
case 3466:
case 1863:
case 821:
case 656:
case 283:
case 2151:
case 708:
case 738:
case 4045:
case 868:
case 1840:
case 1056:
case 2918:
case 126:
case 3040:
case 3957:
case 3782:
case 2233:
case 3363:
case 3063:
case 1257:
case 68:
case 2464:
case 2651:
case 1085:
case 1165:
case 3727:
case 358:
case 922:
case 2868:
case 836:
case 3183:
case 3108:
case 2197:
case 2273:
case 3421:
case 2535:
case 381:
case 2844:
case 1046:
case 1346:
case 2759:
case 3608:
case 1432:
case 698:
case 2639:
case 1443:
case 3213:
case 2005:
case 1460:
case 3711:
case 287:
case 1793:
case 508:
case 4086:
case 2880:
case 2804:
case 1306:
case 3164:
case 2729:
case 2428:
case 3020:
case 2045:
case 2998:
case 3699:
case 1282:
case 2601:
case 1536:
case 483:
case 1820:
case 2419:
case 2949:
case 1361:
case 3806:
case 3757:
case 1403:
case 1488:
case 3907:
case 2166:
case 296:
case 1218:
case 2063:
case 2363:
case 3731:
case 3575:
case 2401:
case 620:
case 3651:
case 3464:
case 2289:
case 2856:
case 1054:
case 98:
case 1603:
case 827:
case 1942:
case 133:
case 2619:
case 4020:
case 3590:
case 3025:
case 383:
case 956:
case 2885:
case 2978:
case 1188:
case 1103:
case 1722:
case 782:
case 150:
case 2747:
case 1465:
case 2384:
case 2791:
case 2084:
case 1752:
case 2293:
case 1632:
case 3408:
case 458:
case 2738:
case 1902:
case 3202:
case 2497:
case 978:
case 481:
case 2441:
case 3355:
case 1660:
case 1773:
case 2826:
case 1132:
case 2158:
case 2677:
case 1324:
case 289:
case 1143:
case 3117:
case 584:
case 4050:
case 2562:
case 1160:
case 3386:
case 3086:
case 2579:
case 145:
case 2018:
case 1263:
case 3057:
case 1389:
case 1089:
case 15:
case 1467:
case 1240:
case 2745:
case 3615:
case 666:
case 2254:
case 2690:
case 3519:
case 980:
case 3720:
case 1592:
case 2675:
case 2925:
case 1956:
case 3889:
case 3115:
case 2833:
case 199:
case 2705:
case 3311:
case 3011:
case 1676:
case 3662:
case 2059:
case 2359:
case 3984:
case 248:
case 3577:
case 3630:
case 3900:
case 329:
case 3162:
case 1176:
case 3130:
case 1114:
case 984:
case 142:
case 3558:
case 1811:
case 1496:
case 876:
case 4009:
case 3135:
case 3597:
case 3786:
case 3852:
case 1696:
case 720:
case 1373:
case 3539:
case 218:
case 162:
case 1968:
case 221:
case 938:
case 3873:
case 3755:
case 3244:
case 2700:
case 1205:
case 2347:
case 268:
case 1352:
case 2784:
case 2391:
case 2091:
case 3309:
case 883:
case 3009:
case 4027:
case 3268:
case 2195:
case 1553:
case 724:
case 2537:
case 3110:
case 1898:
case 1831:
case 2:
case 1134:
case 4057:
case 3725:
case 406:
case 2599:
case 1849:
case 2564:
case 2007:
case 2307:
case 1245:
case 2740:
case 525:
case 1904:
case 1754:
case 3610:
case 165:
case 1980:
case 1572:
case 173:
case 2695:
case 2490:
case 3331:
case 3031:
case 646:
case 3204:
case 3822:
case 3945:
case 1667:
case 291:
case 1309:
case 244:
case 1268:
case 2313:
case 2013:
case 442:
case 3944:
case 1430:
case 657:
case 1755:
case 2250:
case 279:
case 517:
case 1462:
case 2694:
case 3476:
case 362:
case 397:
case 1539:
case 3073:
case 3373:
case 2474:
case 2169:
case 1786:
case 1541:
case 2194:
case 833:
case 592:
case 567:
case 2891:
case 790:
case 2946:
case 2416:
case 2847:
case 127:
case 1031:
case 1822:
case 2136:
case 2785:
case 3572:
case 3980:
case 1349:
case 365:
case 373:
case 605:
case 3904:
case 3634:
case 1610:
case 2961:
case 3754:
case 1725:
case 2220:
case 794:
case 3849:
case 2636:
case 97:
case 3167:
case 2882:
case 2807:
case 3134:
case 445:
case 3553:
case 1115:
case 1889:
case 3956:
case 3706:
case 3857:
case 953:
case 3592:
case 2588:
case 386:
case 465:
case 210:
case 1378:
case 711:
case 106:
case 930:
case 3467:
case 1615:
case 1357:
case 3263:
case 2333:
case 2954:
case 4022:
case 35:
case 3089:
case 415:
case 293:
case 2342:
case 1528:
case 2674:
case 1027:
case 1327:
case 214:
case 4052:
case 1130:
case 2532:
case 277:
case 342:
case 1558:
case 3114:
case 3746:
case 3581:
case 547:
case 1162:
case 2560:
case 3176:
case 1750:
case 2255:
case 129:
case 1900:
case 462:
case 2744:
case 1630:
case 2302:
case 2002:
case 264:
case 2087:
case 371:
case 2387:
case 2871:
case 569:
case 1226:
case 3926:
case 3093:
case 1435:
case 1311:
case 904:
case 3200:
case 399:
case 2116:
case 2472:
case 3103:
case 3188:
case 1679:
case 350:
case 4061:
case 26:
case 553:
case 1151:
case 2192:
case 90:
case 3229:
case 2056:
case 2356:
case 3412:
case 21:
case 226:
case 1448:
case 3825:
case 303:
case 333:
case 1437:
case 1179:
case 663:
case 3603:
case 3354:
case 3933:
case 2257:
case 897:
case 1798:
case 2692:
case 1242:
case 3218:
case 2227:
case 865:
case 947:
case 705:
case 1386:
case 1086:
case 1971:
case 1621:
case 873:
case 2576:
case 3143:
case 3855:
case 3132:
case 919:
case 3271:
case 3324:
case 1055:
case 209:
case 239:
case 3660:
case 1824:
case 1202:
case 2681:
case 1121:
case 3516:
case 2026:
case 1287:
case 815:
case 1709:
case 3752:
case 3902:
case 1408:
case 1483:
case 1959:
case 3632:
case 2211:
case 641:
case 694:
case 3291:
case 886:
case 3793:
case 917:
case 2209:
case 79:
case 2068:
case 2368:
case 3238:
case 2481:
case 628:
case 3460:
case 974:
case 1050:
case 1417:
case 3443:
case 3665:
case 661:
case 2596:
case 2044:
case 4024:
case 2702:
case 1938:
case 3432:
case 2123:
case 1608:
case 1683:
case 301:
case 252:
case 2787:
case 3569:
case 85:
case 3046:
case 1421:
case 845:
case 967:
case 158:
case 1108:
case 1183:
case 2973:
case 2623:
case 3165:
case 207:
case 3488:
case 450:
case 2231:
case 3061:
case 2172:
case 3361:
case 1982:
case 2304:
case 2653:
case 1907:
case 2742:
case 3612:
case 2380:
case 2249:
case 3820:
case 3536:
case 3207:
case 970:
case 1451:
case 2492:
case 3282:
case 995:
case 842:
case 1020:
case 403:
case 3112:
case 433:
case 24:
case 2534:
case 1595:
case 2153:
case 1479:
case 1137:
case 2672:
case 2845:
case 1199:
case 3306:
case 3006:
case 871:
case 3211:
case 2465:
case 437:
case 1791:
case 1439:
case 2752:
case 1293:
case 2987:
case 2632:
case 2902:
case 1497:
case 77:
case 3026:
case 669:
case 941:
case 2660:
case 994:
case 309:
case 1911:
case 1530:
case 2773:
case 2132:
case 3423:
case 1158:
case 2024:
case 2324:
case 189:
case 4044:
case 2143:
case 254:
case 1562:
case 2160:
case 3576:
case 3800:
case 619:
case 3227:
case 4068:
case 840:
case 3884:
case 3085:
case 3257:
case 975:
case 751:
case 1401:
case 963:
case 3692:
case 1289:
case 1856:
case 3453:
case 455:
case 2933:
case 2688:
case 1957:
case 44:
case 2412:
case 233:
case 2825:
case 326:
case 3840:
case 59:
case 3356:
case 3056:
case 3278:
case 891:
case 1515:
case 1628:
case 2103:
case 4004:
case 60:
case 3472:
case 1466:
case 4085:
case 734:
case 704:
case 1222:
case 1804:
case 2006:
case 1666:
case 3153:
case 1428:
case 1510:
case 426:
case 3534:
case 34:
case 505:
case 535:
case 3492:
case 2207:
case 1345:
case 2282:
case 814:
case 3742:
case 1419:
case 3380:
case 1949:
case 2612:
case 3733:
case 670:
case 2361:
case 2061:
case 3231:
case 2403:
case 2488:
case 3653:
case 2789:
case 3304:
case 1166:
case 337:
case 1139:
case 1868:
case 692:
case 3973:
case 860:
case 893:
case 4026:
case 532:
case 502:
case 1844:
case 911:
case 2046:
case 2594:
case 3123:
case 2432:
case 617:
case 3702:
case 3952:
case 231:
case 352:
case 201:
case 674:
case 3344:
case 2913:
case 2665:
case 2460:
case 2247:
case 1305:
case 557:
case 1641:
case 2793:
case 3368:
case 3068:
case 1697:
case 1195:
case 4042:
case 460:
case 1920:
case 67:
case 3512:
case 2898:
case 809:
case 3906:
case 3756:
case 3807:
case 1475:
case 2849:
case 1564:
case 719:
case 1740:
case 2634:
case 1007:
case 2904:
case 2754:
case 3961:
case 1382:
case 2572:
case 273:
case 1695:
case 935:
case 543:
case 747:
case 1763:
case 1261:
case 2667:
case 3946:
case 3169:
case 932:
case 826:
case 2809:
case 3565:
case 4087:
case 2373:
case 3474:
case 2724:
case 297:
case 1508:
case 3694:
case 3726:
case 3250:
case 1047:
case 3013:
case 2205:
case 2523:
case 3313:
case 1347:
case 212:
case 168:
case 2414:
case 1091:
case 344:
case 1038:
case 528:
case 1338:
case 2196:
case 1705:
case 3116:
case 1955:
case 2093:
case 2393:
case 3469:
case 2284:
case 2827:
case 3494:
case 3768:
case 1359:
case 3087:
case 3255:
case 148:
case 604:
case 634:
case 2614:
case 3744:
case 1887:
case 1371:
case 572:
case 3859:
case 1224:
case 1986:
case 2581:
case 2746:
case 3532:
case 4013:
case 377:
case 3543:
case 3924:
case 3674:
case 314:
case 491:
case 3342:
case 393:
case 1579:
case 1495:
case 3333:
case 3704:
case 2878:
case 792:
case 767:
case 563:
case 807:
case 1029:
case 286:
case 653:
case 440:
case 3503:
case 3588:
case 3225:
case 310:
case 1551:
case 774:
case 1190:
case 1925:
case 1675:
case 852:
case 717:
case 1833:
case 2706:
case 3966:
case 2429:
case 2107:
case 3779:
case 2728:
case 1580:
case 1622:
case 3867:
case 3149:
case 2070:
case 824:
case 385:
case 3545:
case 3272:
case 3131:
case 4015:
case 3198:
case 2095:
case 2719:
case 105:
case 135:
case 2418:
case 1122:
case 3010:
case 2520:
case 1489:
case 2937:
case 3751:
case 1067:
case 3698:
case 2999:
case 416:
case 346:
case 3505:
case 3223:
case 2471:
case 627:
case 918:
case 4030:
case 2777:
case 2550:
case 1152:
case 2869:
case 1096:
case 1396:
case 2138:
case 1673:
case 2265:
case 968:
case 3896:
case 1239:
case 1297:
case 2983:
case 2908:
case 1732:
case 1173:
case 2459:
case 2691:
case 587:
case 2758:
case 3609:
case 1743:
case 3717:
case 2171:
case 3062:
case 1981:
case 2797:
case 2874:
case 1693:
case 2741:
case 2243:
case 3611:
case 3330:
case 2260:
case 2447:
case 1014:
case 1452:
case 629:
case 2491:
case 3958:
case 3708:
case 3783:
case 3111:
case 1526:
case 2555:
case 1193:
case 1277:
case 2921:
case 2671:
case 776:
case 2159:
case 3977:
case 1862:
case 3584:
case 2129:
case 3737:
case 3292:
case 923:
case 3449:
case 1712:
case 3919:
case 366:
case 2390:
case 758:
case 3431:
case 2203:
case 2525:
case 2288:
case 606:
case 3764:
case 2951:
case 1992:
case 3540:
case 3928:
case 3678:
case 1422:
case 1815:
case 1189:
case 2979:
case 898:
case 2075:
case 32:
case 1032:
case 194:
case 885:
case 2276:
case 1124:
case 2684:
case 2358:
case 141:
case 3450:
case 1343:
case 278:
case 3017:
case 1360:
case 1060:
case 2405:
case 3735:
case 2214:
case 324:
case 498:
case 3559:
case 1502:
case 1587:
case 4008:
case 2077:
case 2377:
case 1624:
case 1796:
case 846:
case 3832:
case 1916:
case 1446:
case 3351:
case 0:
case 2915:
case 2663:
case 1879:
case 3125:
case 320:
case 3529:
case 2795:
case 175:
case 2578:
case 1654:
case 727:
case 996:
case 3625:
case 3975:
case 3803:
case 3379:
case 3079:
case 2028:
case 2892:
case 2328:
case 2557:
case 4048:
case 1275:
case 2770:
case 113:
case 729:
case 1936:
case 2145:
case 1606:
case 4051:
case 1837:
case 1270:
case 5:
case 2531:
case 420:
case 1848:
case 2598:
case 1864:
case 2549:
case 2366:
case 2790:
case 2463:
case 3099:
case 3399:
case 2301:
case 1106:
case 3064:
case 2440:
case 3337:
case 3037:
case 1661:
case 4079:
case 1012:
case 3995:
case 736:
case 706:
case 866:
case 1513:
case 3591:
case 2509:
case 3150:
case 658:
case 2105:
case 1808:
case 2296:
case 521:
case 3650:
case 398:
case 1714:
case 2039:
case 2339:
case 2484:
case 161:
case 3383:
case 3294:
case 3762:
case 2397:
case 1969:
case 2823:
case 2041:
case 128:
case 2605:
case 1146:
case 3770:
case 2079:
case 2518:
case 3028:
case 983:
case 808:
case 838:
case 1656:
case 4001:
case 2803:
case 356:
case 1819:
case 2625:
case 1215:
case 536:
case 3640:
case 3795:
case 3019:
case 3578:
case 1480:
case 2125:
case 1685:
case 2990:
case 220:
case 1828:
case 1392:
case 1156:
case 696:
case 3663:
case 119:
case 4041:
case 2321:
case 2021:
case 2686:
case 1126:
case 2832:
case 3377:
case 3881:
case 3077:
case 689:
case 147:
case 2216:
case 2860:
case 1626:
case 224:
case 1468:
case 3962:
case 1381:
case 1230:
case 7:
case 3405:
case 169:
case 3527:
case 378:
case 3600:
case 3358:
case 3684:
case 2455:
case 3041:
case 149:
case 3605:
case 1668:
case 3397:
case 2762:
case 1426:
case 687:
case 880:
case 2294:
case 2308:
case 2083:
case 1573:
case 1644:
case 1235:
case 298:
case 2650:
case 117:
case 1168:
case 3105:
case 2865:
case 192:
case 167:
case 1552:
case 2538:
case 1841:
case 4058:
case 1023:
case 723:
case 1996:
case 1897:
case 884:
case 1680:
case 2048:
case 2348:
case 2037:
case 2337:
case 1604:
case 976:
case 3301:
case 3001:
case 2715:
case 1210:
case 1866:
case 1967:
case 3234:
case 3645:
case 3872:
case 1485:
case 2236:
case 3066:
case 2970:
case 4019:
case 2582:
case 2425:
case 3531:
case 3775:
case 2812:
case 3598:
case 48:
case 748:
case 1456:
case 308:
case 2717:
case 856:
case 668:
case 3638:
case 3908:
case 3983:
case 1487:
case 3758:
case 2939:
case 3691:
case 1069:
case 1369:
case 2896:
case 1283:
case 2997:
case 1781:
case 1094:
case 1546:
case 2035:
case 3191:
case 88:
case 3550:
case 2427:
case 3777:
case 618:
case 3869:
case 188:
case 558:
case 2505:
case 3212:
case 1870:
case 1506:
case 480:
case 2698:
case 2253:
case 1299:
case 2310:
case 3520:
case 3607:
case 3719:
case 3948:
case 3095:
case 1442:
case 1912:
case 2649:
case 2834:
case 2272:
case 2198:
case 2545:
case 285:
case 4090:
case 3070:
case 3429:
case 2966:
case 2867:
case 3728:
case 3075:
case 216:
case 1772:
case 2157:
case 3629:
case 787:
case 1142:
case 2540:
case 3118:
case 4095:
case 1890:
case 3701:
case 3288:
case 2015:
case 2431:
case 623:
case 3951:
case 2764:
case 3090:
case 2449:
case 2919:
case 2748:
case 130:
case 1875:
case 2292:
case 2657:
case 1988:
case 3482:
case 1633:
case 1074:
case 1374:
case 2977:
case 3555:
case 3921:
case 2814:
case 2127:
case 3739:
case 3491:
case 3438:
case 2281:
case 134:
case 1932:
case 3447:
case 3816:
case 2330:
case 2030:
case 1524:
case 3917:
case 1943:
case 1217:
case 3243:
case 3741:
case 3586:
case 1960:
case 3232:
case 3874:
case 3797:
case 2062:
case 2362:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745409601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,];
var gg_b = "1745409601/";

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
