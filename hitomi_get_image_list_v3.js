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
case 752:
case 1365:
case 1684:
case 3035:
case 3957:
case 464:
case 1911:
case 3701:
case 1308:
case 1064:
case 2670:
case 3197:
case 2267:
case 3702:
case 2773:
case 3347:
case 1655:
case 1550:
case 2684:
case 667:
case 327:
case 254:
case 2308:
case 2575:
case 3093:
case 1844:
case 582:
case 655:
case 1806:
case 1670:
case 982:
case 2912:
case 3427:
case 1773:
case 1837:
case 1091:
case 2790:
case 2703:
case 3084:
case 2876:
case 2169:
case 978:
case 3299:
case 2600:
case 3664:
case 3944:
case 2529:
case 1378:
case 1716:
case 2498:
case 1092:
case 3354:
case 1128:
case 2530:
case 472:
case 1703:
case 1857:
case 3913:
case 1790:
case 1529:
case 3319:
case 1169:
case 2716:
case 2568:
case 1530:
case 3591:
case 164:
case 196:
case 2650:
case 4064:
case 1584:
case 454:
case 3483:
case 3196:
case 2222:
case 3977:
case 3592:
case 3005:
case 3688:
case 2749:
case 3956:
case 1338:
case 3304:
case 2584:
case 1650:
case 1221:
case 264:
case 296:
case 657:
case 3426:
case 1753:
case 3461:
case 2675:
case 325:
case 665:
case 93:
case 2338:
case 3848:
case 3110:
case 1463:
case 304:
case 3751:
case 1535:
case 1717:
case 3124:
case 4091:
case 2500:
case 3752:
case 774:
case 1605:
case 1088:
case 2482:
case 2856:
case 1948:
case 3050:
case 2358:
case 2463:
case 1481:
case 323:
case 1629:
case 1593:
case 1733:
case 1482:
case 272:
case 3380:
case 2088:
case 1877:
case 650:
case 2795:
case 3852:
case 182:
case 2777:
case 3294:
case 3100:
case 803:
case 1895:
case 43:
case 3669:
case 1281:
case 3949:
case 2263:
case 3193:
case 3359:
case 3851:
case 3953:
case 1282:
case 3015:
case 1777:
case 824:
case 282:
case 706:
case 3135:
case 1263:
case 3314:
case 1524:
case 1756:
case 554:
case 1164:
case 376:
case 3628:
case 3933:
case 1466:
case 838:
case 3261:
case 2191:
case 1421:
case 2849:
case 1069:
case 651:
case 3339:
case 2951:
case 2192:
case 3262:
case 2736:
case 2707:
case 3832:
case 345:
case 1422:
case 3320:
case 3283:
case 1191:
case 2466:
case 392:
case 3995:
case 1849:
case 2421:
case 1341:
case 3748:
case 1596:
case 2510:
case 2422:
case 1342:
case 178:
case 1707:
case 3871:
case 13:
case 1816:
case 3872:
case 2803:
case 3487:
case 988:
case 800:
case 74:
case 3499:
case 23:
case 1624:
case 596:
case 3096:
case 3712:
case 3711:
case 2298:
case 87:
case 3168:
case 1776:
case 3150:
case 2515:
case 2706:
case 4069:
case 3445:
case 2873:
case 2737:
case 661:
case 321:
case 3227:
case 2188:
case 3903:
case 2597:
case 3309:
case 314:
case 3325:
case 1515:
case 3916:
case 3024:
case 3175:
case 1696:
case 478:
case 4028:
case 2713:
case 2467:
case 2610:
case 3002:
case 3595:
case 887:
case 316:
case 1552:
case 1671:
case 1764:
case 1327:
case 3517:
case 2:
case 1551:
case 1177:
case 933:
case 1073:
case 1434:
case 1225:
case 3824:
case 2996:
case 2552:
case 3465:
case 4049:
case 3533:
case 741:
case 3793:
case 1910:
case 2764:
case 3700:
case 3690:
case 2551:
case 2209:
case 1531:
case 1107:
case 32:
case 3755:
case 402:
case 66:
case 1924:
case 1419:
case 566:
case 1792:
case 508:
case 1136:
case 3071:
case 3810:
case 1532:
case 3784:
case 3072:
case 4017:
case 1791:
case 966:
case 1485:
case 2924:
case 2419:
case 2107:
case 2016:
case 2532:
case 1454:
case 1003:
case 1869:
case 1361:
case 2383:
case 3768:
case 1176:
case 3031:
case 3695:
case 2049:
case 1326:
case 1157:
case 3516:
case 1915:
case 1571:
case 3112:
case 2053:
case 2828:
case 3032:
case 530:
case 1220:
case 1651:
case 885:
case 429:
case 1049:
case 2176:
case 2915:
case 3633:
case 2157:
case 1446:
case 1404:
case 2362:
case 4:
case 3729:
case 2220:
case 4016:
case 65:
case 1144:
case 1631:
case 556:
case 537:
case 2474:
case 3889:
case 704:
case 2214:
case 3381:
case 1788:
case 1394:
case 418:
case 2113:
case 648:
case 1259:
case 912:
case 956:
case 1106:
case 3382:
case 3969:
case 2243:
case 2144:
case 2394:
case 786:
case 3458:
case 1113:
case 1214:
case 1033:
case 1474:
case 3815:
case 2632:
case 949:
case 4090:
case 2137:
case 3653:
case 2480:
case 2106:
case 3258:
case 2386:
case 693:
case 1414:
case 1929:
case 3875:
case 2443:
case 9:
case 2056:
case 2280:
case 1930:
case 5:
case 873:
case 1888:
case 929:
case 2077:
case 2929:
case 531:
case 3544:
case 846:
case 1386:
case 2173:
case 3850:
case 3636:
case 3797:
case 133:
case 2323:
case 1968:
case 2930:
case 1056:
case 776:
case 1459:
case 1077:
case 2728:
case 634:
case 2007:
case 2439:
case 294:
case 875:
case 1950:
case 745:
case 1769:
case 2420:
case 1340:
case 2512:
case 3805:
case 3238:
case 1204:
case 1103:
case 695:
case 412:
case 2246:
case 1007:
case 1511:
case 3829:
case 3557:
case 1116:
case 1036:
case 792:
case 518:
case 1512:
case 1420:
case 918:
case 3830:
case 3656:
case 4006:
case 3172:
case 2103:
case 3988:
case 3677:
case 3260:
case 1993:
case 1149:
case 3710:
case 870:
case 2076:
case 1285:
case 2935:
case 3855:
case 3418:
case 3278:
case 2548:
case 740:
case 1892:
case 3507:
case 80:
case 358:
case 433:
case 1935:
case 2399:
case 1057:
case 2891:
case 34:
case 1479:
case 2285:
case 3796:
case 3012:
case 2153:
case 3132:
case 2254:
case 1387:
case 3870:
case 130:
case 2892:
case 2195:
case 2611:
case 2044:
case 747:
case 1013:
case 256:
case 3835:
case 212:
case 2345:
case 1425:
case 1133:
case 2955:
case 2612:
case 2409:
case 877:
case 3676:
case 3893:
case 3800:
case 1611:
case 494:
case 1984:
case 2425:
case 1345:
case 3991:
case 408:
case 1117:
case 902:
case 3151:
case 435:
case 1006:
case 1201:
case 3180:
case 3406:
case 3437:
case 277:
case 837:
case 1679:
case 3444:
case 2514:
case 856:
case 1745:
case 1998:
case 4042:
case 2559:
case 2827:
case 3618:
case 4041:
case 2202:
case 3413:
case 753:
case 2543:
case 281:
case 3174:
case 309:
case 3767:
case 91:
case 1799:
case 1520:
case 1412:
case 2018:
case 1609:
case 2138:
case 830:
case 2625:
case 270:
case 3079:
case 3476:
case 652:
case 51:
case 3216:
case 1539:
case 985:
case 446:
case 1411:
case 2799:
case 3104:
case 3290:
case 755:
case 3203:
case 1018:
case 2520:
case 2272:
case 391:
case 459:
case 3146:
case 170:
case 2411:
case 3541:
case 2178:
case 1659:
case 2982:
case 1232:
case 835:
case 2328:
case 2042:
case 1448:
case 3020:
case 580:
case 1862:
case 1231:
case 808:
case 1643:
case 1963:
case 1579:
case 275:
case 1369:
case 2883:
case 1740:
case 750:
case 2232:
case 3253:
case 2659:
case 3766:
case 2862:
case 2448:
case 1042:
case 3721:
case 3518:
case 2643:
case 1981:
case 763:
case 3994:
case 2826:
case 1041:
case 1883:
case 3882:
case 2786:
case 1251:
case 1620:
case 3389:
case 146:
case 3043:
case 2165:
case 1639:
case 322:
case 662:
case 259:
case 4018:
case 2251:
case 3962:
case 1786:
case 971:
case 2894:
case 3863:
case 1525:
case 3961:
case 3134:
case 2639:
case 1388:
case 3781:
case 577:
case 2451:
case 1604:
case 1922:
case 1547:
case 3638:
case 1823:
case 3565:
case 283:
case 1058:
case 3125:
case 334:
case 1966:
case 1646:
case 3508:
case 2886:
case 319:
case 3375:
case 1451:
case 2794:
case 981:
case 3256:
case 2388:
case 480:
case 3940:
case 2604:
case 2922:
case 2646:
case 3350:
case 2058:
case 1452:
case 581:
case 802:
case 3495:
case 1886:
case 3305:
case 1554:
case 3368:
case 2783:
case 471:
case 2432:
case 1840:
case 4008:
case 3658:
case 3046:
case 2519:
case 4065:
case 570:
case 1762:
case 2726:
case 2554:
case 1680:
case 2118:
case 3822:
case 2840:
case 1783:
case 1060:
case 1432:
case 2038:
case 3923:
case 3866:
case 668:
case 50:
case 2762:
case 2585:
case 606:
case 3490:
case 1078:
case 2887:
case 1647:
case 1142:
case 3384:
case 2211:
case 3798:
case 1899:
case 397:
case 3608:
case 1141:
case 1634:
case 1887:
case 1212:
case 3370:
case 3120:
case 2142:
case 2967:
case 2899:
case 3416:
case 426:
case 1211:
case 3139:
case 2634:
case 483:
case 171:
case 4038:
case 1654:
case 2580:
case 3678:
case 959:
case 3047:
case 3558:
case 559:
case 973:
case 2845:
case 3473:
case 1008:
case 3213:
case 1727:
case 485:
case 1580:
case 946:
case 4060:
case 2654:
case 1401:
case 3244:
case 2065:
case 2727:
case 187:
case 2364:
case 3300:
case 546:
case 2685:
case 3847:
case 4040:
case 2306:
case 2344:
case 1919:
case 544:
case 1808:
case 2045:
case 76:
case 2194:
case 917:
case 3978:
case 620:
case 3182:
case 360:
case 3725:
case 1954:
case 932:
case 3687:
case 3586:
case 2808:
case 107:
case 1985:
case 2424:
case 1344:
case 1200:
case 2865:
case 3181:
case 2667:
case 2522:
case 2410:
case 3779:
case 1255:
case 3854:
case 2934:
case 2161:
case 1284:
case 1099:
case 424:
case 1162:
case 1410:
case 1947:
case 1522:
case 1270:
case 27:
case 100:
case 2255:
case 1718:
case 403:
case 3819:
case 1934:
case 83:
case 1376:
case 2183:
case 791:
case 1126:
case 3645:
case 3965:
case 2099:
case 3428:
case 1040:
case 205:
case 3739:
case 2860:
case 878:
case 1980:
case 1268:
case 748:
case 2742:
case 238:
case 3720:
case 2336:
case 3623:
case 2229:
case 1860:
case 999:
case 3348:
case 350:
case 3198:
case 3587:
case 3021:
case 686:
case 3469:
case 1229:
case 363:
case 3066:
case 1336:
case 3958:
case 599:
case 2622:
case 3640:
case 2127:
case 1497:
case 124:
case 1415:
case 3874:
case 2946:
case 2666:
case 1023:
case 1356:
case 365:
case 3938:
case 1567:
case 4087:
case 1377:
case 901:
case 1621:
case 1250:
case 357:
case 882:
case 2023:
case 336:
case 1946:
case 1666:
case 2415:
case 1489:
case 111:
case 3662:
case 3527:
case 3167:
case 2297:
case 3082:
case 415:
case 1758:
case 1395:
case 48:
case 3941:
case 1145:
case 499:
case 2333:
case 3081:
case 132:
case 351:
case 3626:
case 872:
case 1475:
case 1215:
case 1939:
case 692:
case 742:
case 1333:
case 2145:
case 3780:
case 3063:
case 1062:
case 500:
case 3332:
case 2842:
case 110:
case 2959:
case 2405:
case 3746:
case 1598:
case 2841:
case 643:
case 2349:
case 1914:
case 1429:
case 3331:
case 1738:
case 1061:
case 401:
case 3704:
case 3839:
case 900:
case 2199:
case 1681:
case 1026:
case 793:
case 57:
case 2062:
case 1468:
case 2430:
case 2187:
case 2682:
case 1959:
case 896:
case 2738:
case 1349:
case 2914:
case 2429:
case 1841:
case 2681:
case 1663:
case 97:
case 2909:
case 3627:
case 2140:
case 505:
case 2390:
case 1470:
case 2303:
case 3121:
case 1778:
case 3166:
case 2296:
case 18:
case 3526:
case 3719:
case 1818:
case 1909:
case 215:
case 1303:
case 1390:
case 614:
case 299:
case 2316:
case 3491:
case 3918:
case 1027:
case 3809:
case 1708:
case 3301:
case 4062:
case 1698:
case 1582:
case 1765:
case 911:
case 1186:
case 503:
case 1493:
case 511:
case 3594:
case 2123:
case 4061:
case 1581:
case 2027:
case 2698:
case 854:
case 2493:
case 2186:
case 1373:
case 1563:
case 2581:
case 4083:
case 201:
case 1435:
case 1123:
case 1265:
case 349:
case 3133:
case 1835:
case 809:
case 1208:
case 3234:
case 2152:
case 2367:
case 2724:
case 3970:
case 3247:
case 3195:
case 3611:
case 1800:
case 1893:
case 337:
case 3044:
case 1152:
case 2835:
case 1657:
case 3345:
case 3984:
case 312:
case 3117:
case 1556:
case 574:
case 1724:
case 680:
case 3409:
case 3612:
case 3955:
case 1367:
case 3037:
case 1577:
case 3006:
case 4048:
case 2131:
case 2644:
case 484:
case 891:
case 258:
case 3149:
case 3993:
case 73:
case 24:
case 1884:
case 1613:
case 2536:
case 3285:
case 2796:
case 1278:
case 2637:
case 1418:
case 2132:
case 1855:
case 2870:
case 1131:
case 468:
case 3219:
case 3479:
case 687:
case 14:
case 2855:
case 1132:
case 1012:
case 962:
case 1870:
case 2576:
case 3246:
case 2321:
case 1441:
case 2557:
case 2366:
case 2171:
case 1868:
case 2830:
case 1238:
case 3190:
case 3728:
case 683:
case 1321:
case 3511:
case 3007:
case 85:
case 1366:
case 3116:
case 2868:
case 1656:
case 335:
case 2442:
case 1322:
case 3420:
case 1260:
case 1677:
case 2238:
case 1988:
case 3929:
case 2544:
case 3274:
case 1258:
case 782:
case 184:
case 2850:
case 1513:
case 2636:
case 206:
case 1789:
case 3888:
case 168:
case 1102:
case 2258:
case 1607:
case 4011:
case 333:
case 1797:
case 458:
case 2513:
case 822:
case 3056:
case 1537:
case 3968:
case 685:
case 916:
case 3077:
case 3905:
case 952:
case 3502:
case 2649:
case 2573:
case 3144:
case 842:
case 3394:
case 2458:
case 1052:
case 2363:
case 1381:
case 2815:
case 3632:
case 3017:
case 2653:
case 1382:
case 3480:
case 772:
case 2750:
case 2897:
case 1649:
case 1969:
case 1573:
case 675:
case 2889:
case 1458:
case 819:
case 1653:
case 2775:
case 2928:
case 1897:
case 895:
case 828:
case 1695:
case 1031:
case 1768:
case 3869:
case 558:
case 3652:
case 3915:
case 3239:
case 1516:
case 764:
case 796:
case 3157:
case 3326:
case 3362:
case 1032:
case 1617:
case 3997:
case 2503:
case 3572:
case 3651:
case 4001:
case 3220:
case 893:
case 2031:
case 1730:
case 2695:
case 788:
case 2516:
case 3053:
case 2112:
case 2617:
case 2460:
case 1438:
case 1590:
case 2673:
case 3279:
case 2549:
case 3602:
case 318:
case 3419:
case 2896:
case 4052:
case 12:
case 3136:
case 474:
case 3532:
case 2553:
case 1810:
case 4051:
case 1148:
case 1398:
case 1072:
case 2218:
case 22:
case 1673:
case 1549:
case 1770:
case 1553:
case 2784:
case 3003:
case 2398:
case 3090:
case 2408:
case 2824:
case 3671:
case 3552:
case 568:
case 116:
case 2465:
case 754:
case 331:
case 2533:
case 1616:
case 1517:
case 968:
case 2793:
case 3327:
case 1001:
case 2700:
case 4032:
case 3551:
case 1735:
case 3209:
case 670:
case 584:
case 1824:
case 3225:
case 3434:
case 2616:
case 1533:
case 2001:
case 890:
case 2517:
case 1793:
case 2735:
case 984:
case 1445:
case 2175:
case 68:
case 749:
case 853:
case 879:
case 1990:
case 986:
case 1227:
case 3467:
case 1309:
case 3610:
case 923:
case 756:
case 2150:
case 1916:
case 712:
case 3515:
case 3971:
case 1325:
case 2445:
case 3873:
case 247:
case 3972:
case 2227:
case 904:
case 3744:
case 998:
case 3816:
case 867:
case 33:
case 1871:
case 925:
case 4089:
case 1569:
case 2712:
case 1872:
case 855:
case 2528:
case 525:
case 1130:
case 2871:
case 2379:
case 2129:
case 1096:
case 2973:
case 3902:
case 3624:
case 730:
case 3890:
case 2872:
case 2487:
case 3803:
case 1168:
case 476:
case 1528:
case 617:
case 421:
case 3689:
case 292:
case 2184:
case 3421:
case 1262:
case 520:
case 2917:
case 3422:
case 2440:
case 850:
case 192:
case 1184:
case 2933:
case 794:
case 3191:
case 4024:
case 2261:
case 3849:
case 708:
case 2831:
case 2339:
case 1995:
case 2262:
case 3192:
case 3736:
case 3697:
case 2170:
case 735:
case 2832:
case 1155:
case 245:
case 1917:
case 1089:
case 857:
case 382:
case 1852:
case 1343:
case 1193:
case 1669:
case 1486:
case 836:
case 3895:
case 1100:
case 1851:
case 2097:
case 1359:
case 941:
case 276:
case 2628:
case 3817:
case 610:
case 243:
case 1015:
case 3164:
case 2294:
case 2486:
case 3524:
case 3263:
case 2669:
case 2359:
case 1097:
case 3932:
case 1628:
case 286:
case 1751:
case 3358:
case 539:
case 3463:
case 702:
case 1374:
case 4084:
case 1223:
case 514:
case 1075:
case 4055:
case 3088:
case 3605:
case 914:
case 3668:
case 3948:
case 2936:
case 547:
case 204:
case 1050:
case 1494:
case 2751:
case 186:
case 3593:
case 3629:
case 123:
case 3500:
case 2907:
case 420:
case 3482:
case 3733:
case 921:
case 4070:
case 947:
case 3856:
case 396:
case 624:
case 2029:
case 1732:
case 2461:
case 1483:
case 3675:
case 225:
case 1005:
case 1977:
case 1240:
case 1068:
case 1731:
case 1956:
case 2848:
case 1426:
case 4093:
case 3221:
case 3836:
case 3650:
case 611:
case 427:
case 388:
case 2688:
case 2005:
case 125:
case 2956:
case 1848:
case 3360:
case 2068:
case 2304:
case 2731:
case 498:
case 2811:
case 718:
case 2319:
case 1385:
case 992:
case 1354:
case 1055:
case 1937:
case 3568:
case 2287:
case 3128:
case 3857:
case 2772:
case 3876:
case 2299:
case 3169:
case 2664:
case 2944:
case 3529:
case 2906:
case 545:
case 2354:
case 1287:
case 2937:
case 3530:
case 120:
case 2055:
case 1957:
case 3813:
case 3684:
case 3365:
case 241:
case 2189:
case 976:
case 227:
case 3064:
case 1334:
case 3911:
case 1588:
case 1197:
case 67:
case 3655:
case 3912:
case 1347:
case 127:
case 1189:
case 4029:
case 729:
case 3550:
case 3844:
case 1245:
case 2976:
case 543:
case 2334:
case 7:
case 3267:
case 2588:
case 2692:
case 943:
case 600:
case 425:
case 957:
case 1809:
case 3027:
case 3765:
case 3582:
case 771:
case 565:
case 827:
case 63:
case 3186:
case 2825:
case 557:
case 2809:
case 2301:
case 2734:
case 2747:
case 19:
case 2594:
case 3224:
case 1825:
case 2719:
case 1785:
case 1627:
case 1562:
case 550:
case 315:
case 1372:
case 3470:
case 820:
case 1098:
case 963:
case 2583:
case 4081:
case 563:
case 1121:
case 161:
case 1526:
case 2491:
case 1754:
case 3925:
case 1879:
case 950:
case 3778:
case 1166:
case 3909:
case 2562:
case 2122:
case 3140:
case 2785:
case 2098:
case 1492:
case 2372:
case 3303:
case 4063:
case 1583:
case 3296:
case 2371:
case 2166:
case 2879:
case 3484:
case 1491:
case 2754:
case 2526:
case 1820:
case 825:
case 3430:
case 1332:
case 2228:
case 3187:
case 1746:
case 555:
case 3682:
case 310:
case 1839:
case 3914:
case 567:
case 1269:
case 1694:
case 3842:
case 3959:
case 49:
case 3083:
case 3760:
case 2704:
case 2839:
case 2694:
case 71:
case 3943:
case 3663:
case 3199:
case 1167:
case 1662:
case 560:
case 579:
case 3758:
case 1351:
case 1859:
case 1774:
case 953:
case 1082:
case 2814:
case 1661:
case 1941:
case 461:
case 2683:
case 3395:
case 151:
case 3145:
case 3094:
case 1352:
case 3920:
case 2527:
case 2662:
case 3297:
case 2167:
case 2082:
case 2774:
case 2859:
case 2661:
case 2941:
case 804:
case 1814:
case 3475:
case 2843:
case 2352:
case 783:
case 2081:
case 3333:
case 898:
case 2626:
case 99:
case 2880:
case 1743:
case 59:
case 664:
case 696:
case 1759:
case 236:
case 589:
case 3275:
case 1874:
case 2960:
case 3622:
case 1938:
case 165:
case 1714:
case 2288:
case 3356:
case 3377:
case 1880:
case 455:
case 157:
case 3250:
case 3489:
case 467:
case 303:
case 688:
case 2759:
case 136:
case 672:
case 3838:
case 1739:
case 2022:
case 3040:
case 2198:
case 3268:
case 3980:
case 892:
case 2686:
case 2469:
case 2066:
case 1846:
case 2958:
case 1022:
case 2428:
case 1348:
case 305:
case 2739:
case 460:
case 3860:
case 479:
case 3230:
case 150:
case 1469:
case 775:
case 3307:
case 3742:
case 2599:
case 3336:
case 3974:
case 3229:
case 2623:
case 2312:
case 1540:
case 37:
case 1854:
case 3255:
case 2311:
case 3496:
case 1885:
case 3183:
case 2965:
case 3667:
case 3410:
case 3162:
case 155:
case 2779:
case 3376:
case 1908:
case 3934:
case 2291:
case 3521:
case 769:
case 1311:
case 3718:
case 1645:
case 457:
case 3126:
case 3357:
case 3566:
case 2978:
case 2725:
case 2182:
case 3235:
case 1834:
case 3424:
case 3919:
case 3865:
case 1163:
case 1699:
case 179:
case 777:
case 2847:
case 450:
case 3954:
case 1725:
case 1182:
case 3985:
case 551:
case 463:
case 1181:
case 3045:
case 2699:
case 2523:
case 153:
case 2264:
case 2159:
case 3654:
case 4004:
case 1047:
case 2206:
case 701:
case 3574:
case 2143:
case 1558:
case 713:
case 4046:
case 1114:
case 493:
case 2393:
case 3008:
case 3364:
case 3580:
case 290:
case 2047:
case 922:
case 1867:
case 1143:
case 522:
case 1244:
case 2473:
case 816:
case 387:
case 1393:
case 852:
case 1403:
case 495:
case 2370:
case 1054:
case 1490:
case 3142:
case 2120:
case 2560:
case 3967:
case 715:
case 1538:
case 2416:
case 78:
case 3899:
case 1798:
case 3546:
case 419:
case 1665:
case 1945:
case 1384:
case 4074:
case 434:
case 3141:
case 2490:
case 3472:
case 1560:
case 2538:
case 1120:
case 2665:
case 548:
case 3211:
case 2798:
case 637:
case 656:
case 1019:
case 1257:
case 612:
case 1578:
case 4047:
case 3726:
case 3554:
case 991:
case 490:
case 3840:
case 3761:
case 1004:
case 1368:
case 2207:
case 2923:
case 1658:
case 4034:
case 228:
case 2866:
case 1986:
case 3762:
case 2236:
case 3680:
case 3248:
case 2578:
case 1330:
case 3060:
case 2368:
case 1866:
case 128:
case 1923:
case 31:
case 1821:
case 2986:
case 862:
case 3794:
case 2256:
case 2763:
case 2417:
case 4054:
case 3922:
case 2660:
case 3604:
case 3646:
case 732:
case 1782:
case 134:
case 1125:
case 4085:
case 509:
case 2350:
case 3058:
case 3823:
case 497:
case 717:
case 2495:
case 1508:
case 3534:
case 1256:
case 3451:
case 2638:
case 1417:
case 1109:
case 383:
case 2565:
case 1350:
case 2782:
case 142:
case 2433:
case 2125:
case 2074:
case 744:
case 2508:
case 219:
case 56:
case 2375:
case 2397:
case 3620:
case 1043:
case 346:
case 3894:
case 868:
case 1881:
case 1389:
case 2315:
case 2134:
case 3252:
case 2641:
case 2961:
case 806:
case 4079:
case 2014:
case 2882:
case 3786:
case 1962:
case 590:
case 1147:
case 2389:
case 2881:
case 3525:
case 1863:
case 711:
case 703:
case 2295:
case 2043:
case 222:
case 1233:
case 359:
case 1961:
case 1641:
case 4009:
case 3643:
case 3826:
case 15:
case 3231:
case 2994:
case 2185:
case 3861:
case 1407:
case 46:
case 602:
case 3369:
case 3178:
case 1253:
case 3328:
case 2020:
case 997:
case 705:
case 25:
case 597:
case 1249:
case 2039:
case 2407:
case 2119:
case 3041:
case 77:
case 928:
case 2290:
case 3609:
case 3272:
case 2927:
case 2396:
case 3271:
case 3539:
case 1216:
case 631:
case 1476:
case 84:
case 993:
case 2898:
case 1927:
case 3018:
case 6:
case 1104:
case 4014:
case 1146:
case 2457:
case 191:
case 1396:
case 629:
case 369:
case 1406:
case 1180:
case 2413:
case 448:
case 3543:
case 2273:
case 2174:
case 209:
case 542:
case 45:
case 1444:
case 3745:
case 1618:
case 919:
case 377:
case 1025:
case 1174:
case 26:
case 1273:
case 519:
case 1413:
case 2444:
case 534:
case 707:
case 3514:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756436402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,];
var gg_b = "1756436402/";

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
